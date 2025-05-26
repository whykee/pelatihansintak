// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDho_yrRtE-20qjiuBf2GGuVgS3LANjRvg",
  authDomain: "psintak-b1c73.firebaseapp.com",
  projectId: "psintak-b1c73",
  storageBucket: "psintak-b1c73.firebasestorage.app",
  messagingSenderId: "956478658893",
  appId: "1:956478658893:web:793ba792f60835dab93f04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };