import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

import firebaseDevConfig from './firebaseConfig';

const app = firebase.initializeApp(firebaseDevConfig);
export const auth = app.auth();
export const db = app.firestore();
