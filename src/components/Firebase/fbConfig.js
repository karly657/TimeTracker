import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

    apiKey: "AIzaSyBp4-6ay3xghIFAV1frMB7XxsnWWDkqzzk",
    authDomain: "calendar-2103d.firebaseapp.com",
    databaseURL: "https://calendar-2103d.firebaseio.com",
    projectId: "calendar-2103d",
    storageBucket: "calendar-2103d.appspot.com",
    messagingSenderId: "442958735656"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

// class Firebase {
//   constructor() {
//     firebase.initializeApp(config);
//     this.auth = firebase.auth();
//     this.db = firebase.database();
//   }

//   doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = password =>
//     this.auth.currentUser.updatePassword(password);
// }

// export default Firebase;