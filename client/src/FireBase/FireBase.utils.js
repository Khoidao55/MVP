import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyA3NapFGqefRBYKHFvXRQo0Vw25Ewpd4m0",
  authDomain: "mvp-project-c46f6.firebaseapp.com",
  projectId: "mvp-project-c46f6",
  storageBucket: "mvp-project-c46f6.appspot.com",
  messagingSenderId: "234492727560",
  appId: "1:234492727560:web:a5551eb2caf502533a5cbd",
  measurementId: "G-045B045WPE"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
