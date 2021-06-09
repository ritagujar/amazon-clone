import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe-B3uWsGUPvkg9tbYh8TxV7G8jiaRk3Y",
  authDomain: "clone-c1ae8.firebaseapp.com",
  projectId: "clone-c1ae8",
  storageBucket: "clone-c1ae8.appspot.com",
  messagingSenderId: "550727831768",
  appId: "1:550727831768:web:c2184ccf4b13aa3c4b47ad",
  measurementId: "G-0WPVCRJW9E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
