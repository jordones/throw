import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseDevConfig = {
  apiKey: "AIzaSyCu2JvG59xgsAKaiXz_Z62L8IFpEQSfu14",
  authDomain: "throw-dev.firebaseapp.com",
  databaseURL: "https://throw-dev.firebaseio.com",
  projectId: "throw-dev",
  storageBucket: "throw-dev.appspot.com",
  messagingSenderId: "578351477768",
  appId: "1:578351477768:web:a013f9b1356d97472f0dbd",
  measurementId: "G-VVKC9P9XN8"
};


const app = firebase.initializeApp(firebaseDevConfig);
export const auth = app.auth();
export const db = app.firestore();
