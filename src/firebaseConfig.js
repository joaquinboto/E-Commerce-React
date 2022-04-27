// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDmdUgiUpj5cWU2fzuyHzn2Bcxd7nU2hhw",
  authDomain: "react-ecommerce-941bf.firebaseapp.com",
  projectId: "react-ecommerce-941bf",
  storageBucket: "react-ecommerce-941bf.appspot.com",
  messagingSenderId: "620674817990",
  appId: "1:620674817990:web:e288699ede8348a246dcc7",
  measurementId: "G-DEC5S9QWQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db 