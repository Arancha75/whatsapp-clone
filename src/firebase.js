import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAxTVztRl2BkX-13MyExLtb7EFPcD11gyM",
  authDomain: "whats-app-clone-edb9a.firebaseapp.com",
  databaseURL: "https://whats-app-clone-edb9a-default-rtdb.firebaseio.com",
  projectId: "whats-app-clone-edb9a",
  storageBucket: "whats-app-clone-edb9a.appspot.com",
  messagingSenderId: "965258460809",
  appId: "1:965258460809:web:6b56f6168d614d6c225058",
  measurementId: "G-PHJZRLTLEJ"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;