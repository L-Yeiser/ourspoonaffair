import { firebase } from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAFytZksIFgL6OdBlBEwSDhDx9tw1ie1EA',
  authDomain: 'ourspoonaffair.firebaseapp.com',
  databaseURL: 'https://ourspoonaffair.firebaseio.com',
  projectId: 'ourspoonaffair',
  storageBucket: 'ourspoonaffair.appspot.com',
  messagingSenderId: '458641471288',
  appId: '1:458641471288:web:580d28ccb434be67',
};

firebase.initializeApp(config);

export default firebase;
