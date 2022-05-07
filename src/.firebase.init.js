// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJZiluNwqLTyYLPYTgkj6e14mzlJC7-D4",
  authDomain: "sports-gear-11.firebaseapp.com",
  projectId: "sports-gear-11",
  storageBucket: "sports-gear-11.appspot.com",
  messagingSenderId: "772040952772",
  appId: "1:772040952772:web:c5209d0a97afeae8df7291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;