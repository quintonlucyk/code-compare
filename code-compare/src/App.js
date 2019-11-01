import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
// import * as firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./App.css";
import Home from './pages/Home';
import Sign from './pages/Sign';

import { connect } from 'react-redux';
import { compose } from 'redux';


const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {

    // };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signIn = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.inEmail, this.state.inPassword)
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      })
      .then(() => {
        let userUid = firebase.auth().currentUser.uid;
        this.setState({ uid: userUid });
      });
  };

  signUp = event => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.upEmail, this.state.upPassword)
      .catch((error) => {
        var errorCode = error.code;
        console.log(`GOT ERROR: ` + errorCode)
        if (errorCode == 'auth/weak-password') return // password to weak. Minimal 6 characters
        if (errorCode == 'auth/email-already-in-use') return // Return a email already in use error
      })
      .then(() => {
        let userUid = firebase.auth().currentUser.uid;
        firebase.firestore().collection('users').doc(userUid).set({
          email: this.state.upEmail,
        });
        this.setState({ uid: userUid });
      });
  }

  render() {
    const { user, signOut } = this.props;

    return (
      <div className="App">
        {user ?
          <Home user={user} /> :
          <Sign
            handleChange={this.handleChange}
            signIn={this.signIn}
            signUp={this.signUp}
          />}
      </div >
    );
  }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default compose(
  withFirebaseAuth({
    providers,
    firebaseAppAuth
  }),
  connect()
)(App);
