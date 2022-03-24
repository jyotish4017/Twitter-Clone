// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDneIZiQr2eP-URjvzWlSGAiWa-Avn74pU",
    authDomain: "twitter-clone-yt-4017.firebaseapp.com",
    projectId: "twitter-clone-yt-4017",
    storageBucket: "twitter-clone-yt-4017.appspot.com",
    messagingSenderId: "949724614748",
    appId: "1:949724614748:web:8f42110f19550898539699"
  };

 // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };