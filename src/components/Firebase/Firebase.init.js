// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTqZqrjSupVBwQkfuoQNSWwnJqYTDT84k",
  authDomain: "daisy-tools-house.firebaseapp.com",
  projectId: "daisy-tools-house",
  storageBucket: "daisy-tools-house.appspot.com",
  messagingSenderId: "189634063384",
  appId: "1:189634063384:web:44cf83036b3ca326f1a76d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;