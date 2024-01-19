// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzsjPlkih-wtHdv4-kwwBJknS85V9dGYU",
  authDomain: "rj-ulisses.firebaseapp.com",
  projectId: "rj-ulisses",
  storageBucket: "rj-ulisses.appspot.com",
  messagingSenderId: "125487940193",
  appId: "1:125487940193:web:70cebd7de97c1a547ae020",
  measurementId: "G-S5V0XKK814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)