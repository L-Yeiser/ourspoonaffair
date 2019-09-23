import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appId: process.env.FIREBASE_APP_ID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    window.firebase = firebase;
    this.firestore = firebase.firestore();
    this.storage = firebase.storage();
    this.rsvps = this.firestore.collection('rsvp');
  }
}

export default new Firebase();
