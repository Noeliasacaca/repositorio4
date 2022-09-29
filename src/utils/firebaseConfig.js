// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLmTKa6cFSKuDBMIKLFhVgLFGB3XCnF8M",
    authDomain: "tienda-kumo.firebaseapp.com",
    projectId: "tienda-kumo",
    storageBucket: "tienda-kumo.appspot.com",
    messagingSenderId: "813600981839",
    appId: "1:813600981839:web:6399e0e0ad2811ce2b7b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);