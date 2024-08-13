// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwQp4W_cUw9ld7gP5VWtWAPu8d4Hgxm3Q",
  authDomain: "kawaivelvet.firebaseapp.com",
  projectId: "kawaivelvet",
  storageBucket: "kawaivelvet.appspot.com",
  messagingSenderId: "118486684325",
  appId: "1:118486684325:web:15bf66303a25039a7ab34c",
  measurementId: "G-ZFY9KEEK3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);