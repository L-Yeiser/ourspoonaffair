import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appId: process.env.FIREBASE_APP_ID,
};

// console.log(config);

// firebase.initializeApp(config);

// window.firebase = firebase;

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    window.firebase = firebase;
    this.firestore = firebase.firestore();
    this.rsvps = this.firestore.collection('rsvp');
  }
}

export default new Firebase();
