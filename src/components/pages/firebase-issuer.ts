// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHwDDX9p2AOtrLovhoBxKkl873v0UQSLc",
  authDomain: "issuer-database.firebaseapp.com",
  databaseURL: "https://issuer-database-default-rtdb.firebaseio.com",
  projectId: "issuer-database",
  storageBucket: "issuer-database.appspot.com",
  messagingSenderId: "662924567872",
  appId: "1:662924567872:web:16bcca4b59c2fda94a06a5",
  measurementId: "G-DZ4DS0F7E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database1 = getDatabase(app);