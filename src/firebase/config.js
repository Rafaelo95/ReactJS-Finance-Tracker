import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


// https://exerror.com/attempted-import-error-firebase-app-does-not-contain-a-default-export-imported-as-firebase/

firebase.initializeApp({
  apiKey: "AIzaSyDJHLekhVRQpC1T07-rxLM9IGBamKCMI-8",
  authDomain: "finance-tracker-fac6e.firebaseapp.com",
  projectId: "finance-tracker-fac6e",
  storageBucket: "finance-tracker-fac6e.appspot.com",
  messagingSenderId: "809005107612",
  appId: "1:809005107612:web:0f32bb9a24c2ad1a31e059",
});

const db = firebase.firestore();
const auth = firebase.auth();

// console.log(Object.getOwnPropertyNames(auth))
// console.log(auth.app)

export { db, auth };
