import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAIuf_obZAffxHfxngpSBiXkGTmcsfrHo4",
    authDomain: "react-firebase-123.firebaseapp.com",
    databaseURL: "https://react-firebase-123.firebaseio.com",
    projectId: "react-firebase-123",
    storageBucket: "react-firebase-123.appspot.com",
    messagingSenderId: "246625400515",
    appId: "1:246625400515:web:8875a13a6e73ccc7369476",
    measurementId: "G-BW6P8V2H30"
  };

const fire = firebase.initializeApp(firebaseConfig)
  
export default fire;