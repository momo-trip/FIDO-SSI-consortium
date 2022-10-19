// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn41oF9N5kaOLwCo0ywnGgqPyTGuGvV84",
  authDomain: "vc-project-ccc3c.firebaseapp.com",
  databaseURL: "https://vc-project-ccc3c-default-rtdb.firebaseio.com",
  projectId: "vc-project-ccc3c",
  storageBucket: "vc-project-ccc3c.appspot.com",
  messagingSenderId: "837488783157",
  appId: "1:837488783157:web:d5b73217dad1919ff5667c",
  measurementId: "G-Q6DBKCMP28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);