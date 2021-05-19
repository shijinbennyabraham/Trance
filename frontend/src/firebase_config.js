import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB8-A-Z9188H6PH8vzeDOF1ajk3ybe7Aao",
    authDomain: "trance-a6dab.firebaseapp.com",
    projectId: "trance-a6dab",
    storageBucket: "trance-a6dab.appspot.com",
    messagingSenderId: "205361687803",
    appId: "1:205361687803:web:1b018393092c3f75f7545e",
    measurementId: "G-EPZE2FJJWD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db=firebase.database()
