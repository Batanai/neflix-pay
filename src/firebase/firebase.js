import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB83gLl_akn74Jk_mJlV6lu5VDIg9qhHq0",
  authDomain: "netflix-pay.firebaseapp.com",
  projectId: "netflix-pay",
  storageBucket: "netflix-pay.appspot.com",
  messagingSenderId: "607618558086",
  appId: "1:607618558086:web:c16528883e200d2376c907",
  measurementId: "G-03P1BKV2VN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
