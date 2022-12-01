// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMrJWmNkGlHp7muhV1C1N53o9zxGHRAyM",
  authDomain: "react-yolocode.firebaseapp.com",
  projectId: "react-yolocode",
  storageBucket: "react-yolocode.appspot.com",
  messagingSenderId: "835716970536",
  appId: "1:835716970536:web:b8d0284fc551524ef39d1d",
  measurementId: "G-PED6M7J4XL"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
