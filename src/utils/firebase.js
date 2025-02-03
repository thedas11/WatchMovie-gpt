// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ8jbcKGhKV248O4W9CCrZs6ppq3si4Jg",
  authDomain: "watchmovies-gpt.firebaseapp.com",
  projectId: "watchmovies-gpt",
  storageBucket: "watchmovies-gpt.firebasestorage.app",
  messagingSenderId: "959369698077",
  appId: "1:959369698077:web:86bf6fe3807046d7875ff4",
  measurementId: "G-VWKYVC5VMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();