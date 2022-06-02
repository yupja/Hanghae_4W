// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfo5TkaHXLZBcLfrpt99lKllJWJ71dijM",
  authDomain: "sparta-react-18c1b.firebaseapp.com",
  projectId: "sparta-react-18c1b",
  storageBucket: "sparta-react-18c1b.appspot.com",
  messagingSenderId: "523103487745",
  appId: "1:523103487745:web:6494d922e8e8b5fe8cfd00",
  measurementId: "G-2ML9W2NLVK"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = getFirestore();
export {db};



