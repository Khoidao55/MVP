import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const photoStorage = firebase.storage();
  const photoFirestore = firebase.firestore();

  export { photoStorage, photoFirestore };