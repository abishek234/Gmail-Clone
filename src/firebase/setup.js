import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDPjecZlxN5UBdcOY3CdtabuoOBQ_PWJIU",
  authDomain: "clone-bcf6a.firebaseapp.com",
  projectId: "clone-bcf6a",
  storageBucket: "clone-bcf6a.appspot.com",
  messagingSenderId: "795795384700",
  appId: "1:795795384700:web:0733a4d42ce08f753edcf9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)