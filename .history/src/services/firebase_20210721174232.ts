// Integrando o firebase com o react

import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAk9RA-IGmHmtyv3KKn5UIuYCqh_zewjGo",
    authDomain: "letmeask-18ff8.firebaseapp.com",
    databaseURL: "https://letmeask-18ff8-default-rtdb.firebaseio.com",
    projectId: "letmeask-18ff8",
    storageBucket: "letmeask-18ff8.appspot.com",
    messagingSenderId: "273227000266",
    appId: "1:273227000266:web:8ab98bc136a1142d258733"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
