// import firebase tools
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

// requirements
require("dotenv").config();
require("firebase/database");

// database authentication configuration
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

// class containing firebase calls and functions
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // Authorization API, functions to manage authentcated users

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // User API, functions that allows authenticated users to view and modify data 
  // in each of the 5 tables: users, members, events, services, and attendance

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

  member = uid => this.db.ref(`members/${uid}`);
  members = () => this.db.ref("members");

  event = uid => this.db.ref(`events/${uid}`);
  events = () => this.db.ref("events");

  service = uid => this.db.ref(`services/${uid}`);
  services = () => this.db.ref("services");

  attendance = uid => this.db.ref(`attendance/${uid}`);
  attendances = () => this.db.ref("attendance");
}

export default Firebase;
