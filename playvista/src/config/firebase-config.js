// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_I87Qil_15BZ9RXr1ivMke4nudxfH1u4",
  authDomain: "wpl-miniproj.firebaseapp.com",
  projectId: "wpl-miniproj",
  storageBucket: "wpl-miniproj.appspot.com",
  messagingSenderId: "62402057918",
  appId: "1:62402057918:web:e8e44f7a5926201838f0ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);