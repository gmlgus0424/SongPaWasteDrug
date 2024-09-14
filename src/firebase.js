// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBec8kwiTy9gycFSSOQKk8QTecgOLYGBbQ",
  authDomain: "waste-medicine.firebaseapp.com",
  databaseURL: "https://waste-medicine-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "waste-medicine",
  storageBucket: "waste-medicine.appspot.com",
  messagingSenderId: "470801069292",
  appId: "1:470801069292:web:a7592f4641b3c50898e1c9",
  measurementId: "G-SFSDK9LYST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
export const db= getDatabase(app)
export const auth= getAuth(app)
export default app;