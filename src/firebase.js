import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCr_WoG4H_1AiX_yJaA8EPVyoVk7DPe0Q8",
  authDomain: "ddie-database.firebaseapp.com",
  projectId: "ddie-database",
  storageBucket: "ddie-database.appspot.com",
  messagingSenderId: "382429931297",
  appId: "1:382429931297:web:6531f3dc18ec8fd53a8060",
  measurementId: "G-74W69Z1R6D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();

const LINKS = DB.collection("links");

export {
    DB,
    LINKS
}
