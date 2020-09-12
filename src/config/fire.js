import * as firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyBRFpVFNGT7zS6bpRMeYJjOV53bup2NPkY",
    authDomain: "gayatri-cottons-database.firebaseapp.com",
    databaseURL: "https://gayatri-cottons-database.firebaseio.com",
    projectId: "gayatri-cottons-database",
    storageBucket: "gayatri-cottons-database.appspot.com",
    messagingSenderId: "520733155382",
    appId: "1:520733155382:web:75d54fc2c769d5a9e7b897",
    measurementId: "G-EHTWVJE75X"
  };

  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;