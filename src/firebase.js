// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPK55-AzMuJnTSBY87i4s6r9xKpsa9TOI",
  authDomain: "personal-portfolio-c682a.firebaseapp.com",
  projectId: "personal-portfolio-c682a",
  storageBucket: "personal-portfolio-c682a.firebasestorage.app",
  messagingSenderId: "523664593394",
  appId: "1:523664593394:web:de9427af596b43a20c9b6b",
  measurementId: "G-YLENENCCHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);