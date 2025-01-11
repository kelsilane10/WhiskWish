// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGD0if23FKu-DTnje7MFciuIldh5V1-TA",
  authDomain: "whisk-wish.firebaseapp.com",
  projectId: "whisk-wish",
  storageBucket: "whisk-wish.firebasestorage.app",
  messagingSenderId: "204285536617",
  appId: "1:204285536617:web:9838b61ced5f6b058a75f8",
  measurementId: "G-EPD10S0Q17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);