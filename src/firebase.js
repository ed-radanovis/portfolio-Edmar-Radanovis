import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB5ZUeLdRPOiKFBTOyU1OApWiDm9pui6yY",
  authDomain: "portfolio-edmar-radanovis.firebaseapp.com",
  projectId: "portfolio-edmar-radanovis",
  storageBucket: "portfolio-edmar-radanovis.appspot.com",
  messagingSenderId: "31690668297",
  appId: "1:31690668297:web:3540c00205ad4a302d3bd8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
