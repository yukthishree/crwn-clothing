import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_bvGm8tScroVMwU_v0EfkTuSMDOVABGg",
    authDomain: "crwn-db-39f3f.firebaseapp.com",
    databaseURL: "https://crwn-db-39f3f.firebaseio.com",
    projectId: "crwn-db-39f3f",
    storageBucket: "crwn-db-39f3f.appspot.com",
    messagingSenderId: "34701842789",
    appId: "1:34701842789:web:1f5efa4da348d97c0ee98c",
    measurementId: "G-9W7T3FS5C9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;