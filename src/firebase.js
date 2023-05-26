import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBUpaNpHrACopOokpRhK1ZYEQE8j-pl9yo",
  authDomain: "rupeshchandu-portfolio.firebaseapp.com",
  projectId: "rupeshchandu-portfolio",
  storageBucket: "rupeshchandu-portfolio.appspot.com",
  messagingSenderId: "595671022119",
  appId: "1:595671022119:web:03b82b7f4da6747859ac02"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();