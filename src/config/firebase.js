import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCLRA7o7HJ_MRXm89tl2o6k-sB4B3A87yM",
  authDomain: "tiktok-jornadafullstackebac.firebaseapp.com",
  projectId: "tiktok-jornadafullstackebac",
  storageBucket: "tiktok-jornadafullstackebac.appspot.com",
  messagingSenderId: "8856789563",
  appId: "1:8856789563:web:474630dd062b8c6660b21e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
