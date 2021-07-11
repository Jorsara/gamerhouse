import * as firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
    apiKey: "AIzaSyDMQauxbJijdBjukejVpGDIaFmQMnh6OVE",
    authDomain: "gamerhouse-ecommerce.firebaseapp.com",
    projectId: "gamerhouse-ecommerce",
    storageBucket: "gamerhouse-ecommerce.appspot.com",
    messagingSenderId: "882538481195",
    appId: "1:882538481195:web:9c4762fd2ba914e4378c6e"
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
