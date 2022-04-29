import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  orderBy,
  limit,
  onSnapshot,
  query,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB6c-z5QC3ejFY6cx5PO2MQj-_KRrVO79I",
    authDomain: "redux-auth-a29e0.firebaseapp.com",
    projectId: "redux-auth-a29e0",
    storageBucket: "redux-auth-a29e0.appspot.com",
    messagingSenderId: "9844262317",
    appId: "1:9844262317:web:e927385c5fdc96db224d24",
    measurementId: "G-5GF0YEK4NE"
  };
// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

export {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  auth,
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};