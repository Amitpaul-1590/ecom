import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDq_WRJbnZtWnSxqbV_kl-ZZS8DVnhy6wg",
    authDomain: "ecommerce-app-with-react-hooks.firebaseapp.com",
    projectId: "ecommerce-app-with-react-hooks",
    storageBucket: "ecommerce-app-with-react-hooks.appspot.com",
    messagingSenderId: "719037100374",
    appId: "1:719037100374:web:6c6091a610ce02b3a766f7",
    measurementId: "G-ZN4GN3FPP7"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyAlTmOf0RNOT4vGgjhsyyv1g8OWgi4bS6E",
//   authDomain: "project-7966d.firebaseapp.com",
//   projectId: "project-7966d",
//   storageBucket: "project-7966d.appspot.com",
//   messagingSenderId: "531533672972",
//   appId: "1:531533672972:web:11511b07f08aea23be7429"
// };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}