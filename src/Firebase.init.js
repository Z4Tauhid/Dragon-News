// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrT9qDj2ern-a3nxRvfMU1JrVvZ6dtjIY",
  authDomain: "dragon-news-flame.firebaseapp.com",
  projectId: "dragon-news-flame",
  storageBucket: "dragon-news-flame.firebasestorage.app",
  messagingSenderId: "96299562819",
  appId: "1:96299562819:web:ded35411ea03c7ba1961f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app