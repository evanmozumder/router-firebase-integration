// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT3AsXeC3cLFbMJwHnbjfxbdgfQzeyC2I",
  authDomain: "simple-firebase-auth-final.firebaseapp.com",
  // authDomain: "comforting-gelato-c949a9.netlify.app",
  projectId: "simple-firebase-auth-final",
  storageBucket: "simple-firebase-auth-final.appspot.com",
  messagingSenderId: "368338472233",
  appId: "1:368338472233:web:b600a7b59d30243ceb7b38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
