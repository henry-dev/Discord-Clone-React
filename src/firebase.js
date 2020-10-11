// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1Pkz8GnndbVf4tEOkjtVxxu8FCiBmOic",
    authDomain: "discord-react-a7d61.firebaseapp.com",
    databaseURL: "https://discord-react-a7d61.firebaseio.com",
    projectId: "discord-react-a7d61",
    storageBucket: "discord-react-a7d61.appspot.com",
    messagingSenderId: "104301318615",
    appId: "1:104301318615:web:1064d5bbeef19fb70dbb92",
    measurementId: "G-32CY4NB7KS"
  });


const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;