//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const analytics = getAnalytics(firebaseApp);

/*
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
*/

export { db, analytics };
