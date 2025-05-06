import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjg2313qQqA1xQpwny-xEBd7Td2TXKAps",
  authDomain: "ai-mock-interviews-5e8be.firebaseapp.com",
  projectId: "ai-mock-interviews-5e8be",
  storageBucket: "ai-mock-interviews-5e8be.firebasestorage.app",
  messagingSenderId: "867758205074",
  appId: "1:867758205074:web:0b801e4c864f9816a69e4b",
  measurementId: "G-2DVQF9Z5MM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);