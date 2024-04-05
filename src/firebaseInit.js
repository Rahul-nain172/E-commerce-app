// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLdHuEe0zJOnoE29KXoY7V2FD7NGBe06g",
  authDomain: "emart-19196.firebaseapp.com",
  projectId: "emart-19196",
  storageBucket: "emart-19196.appspot.com",
  messagingSenderId: "860427983894",
  appId: "1:860427983894:web:e5a7def8d3d7de5cfba937",
  measurementId: "G-E87HKY33QR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);

