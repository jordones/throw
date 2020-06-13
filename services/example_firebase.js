import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseDevConfig = {
  apiKey: "",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = firebase.initializeApp(firebaseDevConfig);
export const auth = app.auth();
export const db = app.firestore();
