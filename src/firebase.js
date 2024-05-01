import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAwkvY2bnRVJMNS5nGb17cHGxoR0_jDJB0",
  authDomain: "vec-project-43db3.firebaseapp.com",
  projectId: "vec-project-43db3",
  storageBucket: "vec-project-43db3.appspot.com",
  messagingSenderId: "592682984305",
  appId: "1:592682984305:web:5533aaf454ba4adb274cd0"
};
initializeApp(firebaseConfig);
export const db=getFirestore()