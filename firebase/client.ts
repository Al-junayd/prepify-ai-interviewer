import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA31tydByoYVEUbrR5V3Qi1NlAo7VMBfLQ",
  authDomain: "prepify-ai.firebaseapp.com",
  projectId: "prepify-ai",
  storageBucket: "prepify-ai.firebasestorage.app",
  messagingSenderId: "407099215295",
  appId: "1:407099215295:web:5f91a03d85b999235b650a",
  measurementId: "G-0FGK8PPVH8",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
