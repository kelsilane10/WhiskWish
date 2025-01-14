// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_FIREBASE_API_KEY,
  authDomain: "whisk-wish.firebaseapp.com",
  projectId: "whisk-wish",
  storageBucket: "whisk-wish.firebasestorage.app",
  messagingSenderId: process.env.EXPO_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.EXPO_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
