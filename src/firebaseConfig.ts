import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCR1cIQhyFh8G8eDrHcYQ4s46Nq876D_L4",
  authDomain: "fir-project-d0695.firebaseapp.com",
  projectId: "fir-project-d0695",
  storageBucket: "fir-project-d0695.firebasestorage.app",
  messagingSenderId: "339438867897",
  appId: "1:339438867897:web:4cd37b3d8cff5097e35268",
  measurementId: "G-022QYKRK03"
};

// Initialize Firebase (MISSING export for `auth`)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };