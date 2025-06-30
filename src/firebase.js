// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVehW-3Y1UljknpDZUQ1l1PSodHaHuQHQ",
  authDomain: "oraziopetito-5c59c.firebaseapp.com",
  projectId: "oraziopetito-5c59c",
  storageBucket: "oraziopetito-5c59c.firebasestorage.app",
  messagingSenderId: "20912992390",
  appId: "1:20912992390:web:66dd0da73290b95f022107",
  measurementId: "G-VBHC0Y6ZE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);