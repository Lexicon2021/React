
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyARI0ieY7RrF63VmnqawtmTFlx6euCI-RQ",
    authDomain: "kendo-nilex.firebaseapp.com",
    databaseURL: "https://kendo-nilex.firebaseio.com",
    projectId: "kendo-nilex",
    storageBucket: "kendo-nilex.appspot.com",
    messagingSenderId: "243741700870",
    appId: "1:243741700870:web:f1ace530b4643f7dcaa487",
    measurementId: "G-RPBKFJWXYS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
