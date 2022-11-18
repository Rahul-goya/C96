import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB9BQKfvf6-rN6f7vA-DCD3-3J4qgKZjpc",
  authDomain: "ignc-app.firebaseapp.com",
  databaseURL: "https://ignc-app-default-rtdb.firebaseio.com",
  projectId: "ignc-app",
  storageBucket: "ignc-app.appspot.com",
  messagingSenderId: "373846633967",
  appId: "1:373846633967:web:df418a80a49e8f9a215a1a"
};

if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase.database()