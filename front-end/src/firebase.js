import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxhQ8_TfXbiaQGBv2yvJmpd4Y7VmmIi-g",
  authDomain: "housing-rentals.firebaseapp.com",
  projectId: "housing-rentals",
  storageBucket: "housing-rentals.appspot.com",
  messagingSenderId: "53515934445",
  appId: "1:53515934445:web:cf528d4f3e00ea512d8ae4",
  measurementId: "G-WKL63V31D0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };