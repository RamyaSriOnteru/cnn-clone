import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCH7NdyaYSwNO2iarRHQhvZJ4aoDdfHAOQ",
  authDomain: "cnn-clone-aafca.firebaseapp.com",
  projectId: "cnn-clone-aafca",
  storageBucket: "cnn-clone-aafca.firebasestorage.app",
  messagingSenderId: "1054848899406",
  appId: "1:1054848899406:web:72cc021ed4a8b13310261f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
