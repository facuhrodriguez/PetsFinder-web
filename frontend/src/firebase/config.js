import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAVVNdjUWG1xrp3EWMuC5ISnxNlcz3Y6bk",
  authDomain: "petsfinder2022.firebaseapp.com",
  databaseURL: "https://petsfinder2022.firebaseapp.com",
  projectId: "petsfinder2022",
  storageBucket: "petsfinder2022.appspot.com",
  messagingSenderId: "910450925052",
  appId: "1:910450925052:web:d8d5ce4a396b4c1c116679",
  measurementId: "G-VEL2FK5FHZ",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
