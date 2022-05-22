import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEMMtkFFDYEVFXdeq_TcJruKsdCP1P1Gw",
  authDomain: "image-todo.firebaseapp.com",
  projectId: "image-todo",
  storageBucket: "image-todo.appspot.com",
  messagingSenderId: "896927696423",
  appId: "1:896927696423:web:f500cc6953643fbbb2f002"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
