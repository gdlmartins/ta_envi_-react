// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6EZibeY5UoDUAM2FirGgx8rl_5UEAIvk",
  authDomain: "uploadingfile-1860f.firebaseapp.com",
  projectId: "uploadingfile-1860f",
  storageBucket: "uploadingfile-1860f.appspot.com",
  messagingSenderId: "119446983904",
  appId: "1:119446983904:web:b5c9951b46a420db126c85",
  measurementId: "G-6XG5EKTC73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);