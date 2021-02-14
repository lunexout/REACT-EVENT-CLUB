import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCGHzo2p7YBnMx8X2HxnYFOmo8cM7v5kas",
    authDomain: "event-club-d3249.firebaseapp.com",
    projectId: "event-club-d3249",
    storageBucket: "event-club-d3249.appspot.com",
    messagingSenderId: "142973268261",
    appId: "1:142973268261:web:012626c4ea5930ed41eacc",
    measurementId: "G-ELVM8P2RSS"
})

const db = firebaseApp

export default db;