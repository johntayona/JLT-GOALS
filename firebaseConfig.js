
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDoOGS0VGTMDbjjn26pXnvxUubucAcr830",
  authDomain: "jlt-goals.firebaseapp.com",
  projectId: "jlt-goals",
  storageBucket: "jlt-goals.firebasestorage.app",
  messagingSenderId: "549012573966",
  appId: "1:549012573966:web:a79d4856b7b1caace0115f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)