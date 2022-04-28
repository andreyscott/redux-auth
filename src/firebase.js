import { initializeApp } from 'firebase/app';
import { 
getAuth, 
createUserWithEmailAndPassword, 
updateProfil, 
onAuthStateChanged, 
signInWithEmailAndPassword, 
signOut 
} from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6c-z5QC3ejFY6cx5PO2MQj-_KRrVO79I",
    authDomain: "redux-auth-a29e0.firebaseapp.com",
    projectId: "redux-auth-a29e0",
    storageBucket: "redux-auth-a29e0.appspot.com",
    messagingSenderId: "9844262317",
    appId: "1:9844262317:web:e927385c5fdc96db224d24",
    measurementId: "G-5GF0YEK4NE"
  };