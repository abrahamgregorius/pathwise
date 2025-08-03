import { db } from "./firebaseClient";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addNote = async (content) => {
  await addDoc(collection(db, "notes"), { content, createdAt: Date.now() });
};

export const getNotes = async () => {
  const snapshot = await getDocs(collection(db, "notes"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};