// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  signOut,
} from "firebase/auth";
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
const auth = getAuth();

if (process.env.NODE_ENV !== "production") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export const firebaseSignIn = (
  email: string,
  password: string
): Promise<string | null> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`signed in ${user.uid}`);
      return user.uid;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export const firebaseSignOut = (): Promise<void> => {
  return signOut(auth)
    .then(() => {
      console.log(`signed out`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { app, storage, auth };
