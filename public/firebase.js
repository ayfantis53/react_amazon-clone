import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "clone-96dd5.firebaseapp.com",
    projectId: "clone-96dd5",
    storageBucket: "clone-96dd5.appspot.com",
    messagingSenderId: "307139839576",
    appId: "1:307139839576:web:20a67d37ce94d835d96c2d",
    measurementId: "G-PY5RFDV4W1"
  };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
 
    const auth = getAuth(app);
  
    export { db, auth };
  
