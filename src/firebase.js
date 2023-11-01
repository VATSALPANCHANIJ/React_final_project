import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";//
const firebaseConfig = {
    apiKey: "AIzaSyDa6fVr1b45lpvd0sI8WdKIa-YKnsH6UJI",
    authDomain: "pr-12-d2f43.firebaseapp.com",
    databaseURL: "https://pr-12-d2f43-default-rtdb.firebaseio.com",
    projectId: "pr-12-d2f43",
    storageBucket: "pr-12-d2f43.appspot.com",
    messagingSenderId: "118330007903",
    appId: "1:118330007903:web:e8b97ebbae73f2cd8956ea",
    measurementId: "G-47DV5MLTEF"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;

