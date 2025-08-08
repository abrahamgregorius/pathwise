// services/cvAnalyzer.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Ambil API Key dari environment variable
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function analyzeCV(file) {
  try {
    // Baca file jadi base64 (supaya bisa dikirim ke Gemini API)
    const fileBase64 = await readFileAsBase64(file);

    // Buat model instance
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    // Kirim file dan instruksi analisis ke Gemini
    const result = await model.generateContent([
      {
        inlineData: {
          data: fileBase64,
          mimeType: "application/pdf", // Contoh: "application/pdf" atau "application/msword"
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

    // Ambil teks hasilnya
    const outputText = result.response.candidates[0].content.parts[0].text;
    const rawText = outputText
      .replace(/```json\s*/g, '') // hapus pembuka ```json
      .replace(/```/g, '')        // hapus penutup ```
      .trim();

    console.log(rawText)
    
    // Parse ke objek JSON
    const analysis = JSON.parse(rawText);

    return analysis;
  } catch (error) {
    console.error("Error analyzing CV:", error);
    throw new Error("Gagal menganalisis CV");
  }
}

// Helper untuk ubah file ke base64
function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
