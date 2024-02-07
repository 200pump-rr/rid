// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZKlXekMW1SsqrAn4rh1hZ1UKhsjrq00I",
  authDomain: "my-ting-1bf3b.firebaseapp.com",
  projectId: "my-ting-1bf3b",
  storageBucket: "my-ting-1bf3b.appspot.com",
  messagingSenderId: "184013946356",
  appId: "1:184013946356:web:c6124b6366a1b3794f4da1",
  measurementId: "G-TEXP5QSW0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);