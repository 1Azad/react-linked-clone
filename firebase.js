// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD3pxrPOf9bR8a9QUQUI7yT_uV3TkjipDk",
    authDomain: "linkedin-clone-yt-b1cf0.firebaseapp.com",
    projectId: "linkedin-clone-yt-b1cf0",
    storageBucket: "linkedin-clone-yt-b1cf0.appspot.com",
    messagingSenderId: "35797363277",
    appId: "1:35797363277:web:738c34e6d178619bc2ca04",
    measurementId: "G-G3313JSE4Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firebase();
const Auth = firebase.auth();

export { db, Auth };