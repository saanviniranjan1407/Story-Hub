import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAbZEIWfYbdOUXY6ojeB10zELlw4HpgBRQ",
    authDomain: "story-hub-bc558.firebaseapp.com",
    projectId: "story-hub-bc558",
    storageBucket: "story-hub-bc558.appspot.com",
    messagingSenderId: "763756971056",
    appId: "1:763756971056:web:7e2accf22c1562c49e99f5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();