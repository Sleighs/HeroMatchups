import firebase from "firebase";
import firebaseKey from "./firebaseKey";

var firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "hero-pick-app.firebaseapp.com",
  projectId: "hero-pick-app",
  storageBucket: "hero-pick-app.appspot.com",
  messagingSenderId: "791827247382",
  appId: "1:791827247382:web:21c7ac156ce1f4cf062037",
  measurementId: "G-GZVCZS4M48"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };

