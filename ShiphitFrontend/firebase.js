import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwHe1Ci22MD09r-skn7OZLyYBdEX35L74",
  authDomain: "shiphitmobileapppickup-4d0a1.firebaseapp.com",
  projectId: "shiphitmobileapppickup-4d0a1",
  storageBucket: "shiphitmobileapppickup-4d0a1.appspot.com",
  messagingSenderId: "977746945332",
  appId: "1:977746945332:web:17c4aa3b217b35cf58f161",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db };
