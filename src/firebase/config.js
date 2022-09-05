// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6z5NFCLrb0gcKkisiZc4_CxOiOD1lYkA",
  authDomain: "react-curso-2fdb7.firebaseapp.com",
  projectId: "react-curso-2fdb7",
  storageBucket: "react-curso-2fdb7.appspot.com",
  messagingSenderId: "455679427197",
  appId: "1:455679427197:web:5bda3ae45f7467efe9e714",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
