import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
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
export const db=getFirestore(app);

