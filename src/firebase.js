// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzfvfAV3TvgEcKmcyya1yyLbKvbd6cgI4",
  authDomain: "clone-project-1ca03.firebaseapp.com",
  projectId: "clone-project-1ca03",
  storageBucket: "clone-project-1ca03.appspot.com",
  messagingSenderId: "1074648073721",
  appId: "1:1074648073721:web:7038febc9a46ed7a382928",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
