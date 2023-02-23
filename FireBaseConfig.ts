import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAinOk3lMQUZjAHzsSfwSvBqub-H3Bl5Fk",
    authDomain: "fir-backend1-ea141.firebaseapp.com",
    projectId: "fir-backend1-ea141",
    storageBucket: "fir-backend1-ea141.appspot.com",
    messagingSenderId: "496914629849",
    appId: "1:496914629849:web:bd5e068c361837fe9feac8"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app)
