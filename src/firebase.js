import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhvVjfN9epH401P068teTjZBlQlmES_2o",
    authDomain: "portfolio-4f05c.firebaseapp.com",
    projectId: "portfolio-4f05c",
    storageBucket: "portfolio-4f05c.appspot.com",
    messagingSenderId: "55535849883",
    appId: "1:55535849883:web:897e8e65e2ce9a5154913e",
    measurementId: "G-EGGBTFM9BC"
  };

  
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const storage= firebase.storage();
  export{db, auth, storage};

  //export default db;