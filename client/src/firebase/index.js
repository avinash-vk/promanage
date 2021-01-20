import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYj9q7KlwQ6jwxHeufIoDIb7K0S_VyDBs",
    authDomain: "promanage-1a9a5.firebaseapp.com",
    projectId: "promanage-1a9a5",
    storageBucket: "promanage-1a9a5.appspot.com",
    messagingSenderId: "428165518271",
    appId: "1:428165518271:web:64d7457df5e917fc0ec70a"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;