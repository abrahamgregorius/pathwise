// services/cvAnalyzer.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { collection, query, where, getDocs, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebaseClient";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function analyzeCV(file, userId) {
  try {
    if (!userId) {
      throw new Error("userId tidak boleh kosong saat menganalisis CV");
    }
    if (!file?.name) {
      throw new Error("File harus memiliki properti 'name'");
    }

    // 1️⃣ Cek di Firestore apakah sudah pernah dianalisis
    const colRef = collection(db, "cvAnalyses");
    const q = query(
      colRef,
      where("userId", "==", userId),
      where("fileName", "==", file.name)
    );

    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      // Kalau sudah ada, return data pertama
      const docData = snapshot.docs[0].data();
      return { ...docData, docId: snapshot.docs[0].id, fromCache: true };
    }

    // 2️⃣ Kalau belum ada, analisis pakai Gemini
    const fileBase64 = await readFileAsBase64(file);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const result = await model.generateContent([
      {
        inlineData: {
          data: fileBase64,
          mimeType: "application/pdf",
        },
      },
      {
        text: `
          Analisis CV ini dan berikan hasil dalam format JSON:
          {
            "score": <angka 0-100>,
            "atsScore": <angka 0-100>,
            "strengths": [array string],
            "improvements": [array string],
            "keywords": [array string]
          }
          Analyze this CV and return the result as raw JSON only, without markdown, code fences, or explanations.
        `,
      },
    ]);

    const outputText = result.response.candidates[0].content.parts[0].text;
    const rawText = outputText
      .replace(/```json\s*/g, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(rawText);

    // 3️⃣ Simpan hasil ke Firestore
    const docRef = doc(colRef);
    await setDoc(docRef, {
      userId,
      fileName: file.name,
      uploadedAt: serverTimestamp(),
      analyzedAt: serverTimestamp(),
      ...analysis,
    });

    return { ...analysis, docId: docRef.id, fromCache: false };

  } catch (error) {
    console.error("Error analyzing CV:", error);
    throw new Error("Gagal menganalisis CV");
  }
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
