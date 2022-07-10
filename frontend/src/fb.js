// import firebase from "firebase/compat/app";
// import "firebase/compat/storage";
// import "firebase/compat/firestore";

import { initializeApp } from 'firebase/app';

 const firebaseConfig = {
  apiKey: "AIzaSyAVVNdjUWG1xrp3EWMuC5ISnxNlcz3Y6bk",
  authDomain: "petsfinder2022.firebaseapp.com",
  projectId: "petsfinder2022",
  storageBucket: "petsfinder2022.appspot.com",
  messagingSenderId: "910450925052",
  appId: "1:910450925052:web:d8d5ce4a396b4c1c116679",
  measurementId: "G-VEL2FK5FHZ",
};

const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;