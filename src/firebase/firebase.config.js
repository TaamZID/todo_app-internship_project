// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMWyrPvztFjdESgTdZSMBR6ZYEZ8a4CtI",
  authDomain: "todo-app-cb0dc.firebaseapp.com",
  projectId: "todo-app-cb0dc",
  storageBucket: "todo-app-cb0dc.appspot.com",
  messagingSenderId: "655377635367",
  appId: "1:655377635367:web:d261ea0bfa2d9ec6ca5602",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
