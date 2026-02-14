import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-69c05.firebaseapp.com",
  projectId: "authexamnotes-69c05",
  storageBucket: "authexamnotes-69c05.firebasestorage.app",
  messagingSenderId: "576376844601",
  appId: "1:576376844601:web:2b54333e38526ac32238e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()


export {auth, provider}