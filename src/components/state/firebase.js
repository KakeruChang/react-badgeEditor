import app from 'firebase/app';
//import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
const firebase = app.initializeApp(firebaseConfig);
const firebaseDb = firebase.database();

const firebaseData = { tags: [] };
// const firebaseDb = firebase.database();
// class Firebase {
//   constructor() {
//     app.initializeApp(config);

//     this.auth = app.auth();
//     this.db = app.database();
//   }
// }

export { firebase, firebaseDb, firebaseData };
