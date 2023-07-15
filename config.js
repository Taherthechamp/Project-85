import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBqRNNpralyEcQtLi4q-pp1sJxHCxnAC9Y",
  authDomain: "project-78-c0dce.firebaseapp.com",
  databaseURL: "https://project-78-c0dce-default-rtdb.firebaseio.com",
  projectId: "project-78-c0dce",
  storageBucket: "project-78-c0dce.appspot.com",
  messagingSenderId: "189997966682",
  appId: "1:189997966682:web:1b649283d802704ba73f63"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
