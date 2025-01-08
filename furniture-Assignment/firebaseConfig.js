import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMltV9S0yWceSbkGbFgs6TCqgVJlHGJl0",
  authDomain: "checkout-68bc7.firebaseapp.com",
  projectId: "checkout-68bc7",
  storageBucket: "checkout-68bc7.firebasestorage.app",
  messagingSenderId: "747222220874",
  appId: "1:747222220874:web:a5162c68b2a06b0e6066b3",
  measurementId: "G-3130MY11S2",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
