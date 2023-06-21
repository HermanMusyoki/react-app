// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 import { getAuth } from "firebase/auth"
 import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfPSZLxiix8LJjgvvvdoq3J-pyR9GG9vw",
  authDomain: "react-chat-a27fa.firebaseapp.com",
  projectId: "react-chat-a27fa",
  storageBucket: "react-chat-a27fa.appspot.com",
  messagingSenderId: "333869185239",
  appId: "1:333869185239:web:6fde058d0f20ec49e55892",
  measurementId: "G-CK0RZD9QR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);