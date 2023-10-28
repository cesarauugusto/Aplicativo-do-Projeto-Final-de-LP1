import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
 
let firebaseConfig = {
    apiKey: "AIzaSyBkps1Mb8kkkSfto7gDlvDLgK5sxg_hS3A",
    authDomain: "appmlpe.firebaseapp.com",
    databaseURL: "https://appmlpe-default-rtdb.firebaseio.com",
    projectId: "appmlpe",
    storageBucket: "appmlpe.appspot.com",
    messagingSenderId: "970489788145",
    appId: "1:970489788145:web:82d1d44f71cbf1a4b69b50",
    measurementId: "G-0M0C9VB01S"
  };
 
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }
  export default firebase;