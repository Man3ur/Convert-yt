import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMsG2tt3wBvska9bO71RLj_VmTGJq_IOc",
    authDomain: "help-chat-12213.firebaseapp.com",
    projectId: "help-chat-12213",
    storageBucket: "help-chat-12213.appspot.com",
    messagingSenderId: "656155612271",
    appId: "1:656155612271:web:fd8af4c447e7c48941e99a"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }