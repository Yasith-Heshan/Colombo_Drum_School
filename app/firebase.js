// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYt8dV_lp-FHkvesfK-lXW7rZ7nuot7Jo",
    authDomain: "nextjs-tutorial-86f7a.firebaseapp.com",
    projectId: "nextjs-tutorial-86f7a",
    storageBucket: "nextjs-tutorial-86f7a.appspot.com",
    messagingSenderId: "474197865058",
    appId: "1:474197865058:web:c7367971cae9863b65973b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);