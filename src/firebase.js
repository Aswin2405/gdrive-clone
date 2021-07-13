import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgQ-3F3lr4a2Pl6am5UclXqYtt0YwMeos",
  authDomain: "aswin-storage.firebaseapp.com",
  projectId: "aswin-storage",
  storageBucket: "aswin-storage.appspot.com",
  messagingSenderId: "772373765805",
  appId: "1:772373765805:web:026c825bab718f684c3024",
  measurementId: "G-QBW00C8LP1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();
export { auth, db, storage, provider };
