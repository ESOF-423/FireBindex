import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB6z9283x5gTOE3yg9VJnK-Z4CsFTSHnDQ",
  authDomain: "belgradeseniorcenter-70af2.firebaseapp.com",
  databaseURL: "https://belgradeseniorcenter-70af2.firebaseio.com",
  projectId: "belgradeseniorcenter-70af2",
  storageBucket: "belgradeseniorcenter-70af2.appspot.com",
  messagingSenderId: "280497410696"
}

class Firebase {
  constructor() {
    app.initializeApp(config);
  
    this.auth = app.auth();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}


export default Firebase;
