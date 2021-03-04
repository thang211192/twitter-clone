import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCFz7HrPsdVspls8QxpOnHagLNhwv7J9Lk",
    authDomain: "twitter-clone-6e191.firebaseapp.com",
    projectId: "twitter-clone-6e191",
    storageBucket: "twitter-clone-6e191.appspot.com",
    messagingSenderId: "15702965578",
    appId: "1:15702965578:web:2466a69dbd03dfd4e515b3",
    measurementId: "G-6S58MVY252"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore()

export default database;