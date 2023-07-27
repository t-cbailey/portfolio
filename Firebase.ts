// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { FirebaseConfig } from "./types/CustomTypes";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDQOI2wp1dum4w2odZ5lIxoxj-K5F6x6x8",
  authDomain: "personal-portfolio-9fb89.firebaseapp.com",
  projectId: "personal-portfolio-9fb89",
  storageBucket: "personal-portfolio-9fb89.appspot.com",
  messagingSenderId: "171353832828",
  appId: "1:171353832828:web:5e4af71f055dba04a2f8f9",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export { app, storage };
