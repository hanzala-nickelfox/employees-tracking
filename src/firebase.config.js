import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU-EChOj9nu7wPI6-9RbNJhCTNjEmA3HM",
  authDomain: "employees-tracking-75127.firebaseapp.com",
  projectId: "employees-tracking-75127",
  storageBucket: "employees-tracking-75127.appspot.com",
  messagingSenderId: "845974875541",
  appId: "1:845974875541:web:e09513acdda9a5e2c85a9c"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
