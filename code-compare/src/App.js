import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
// import * as firebase from 'firebase';
import 'firebase/firestore';
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./App.css";
const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inEmail: "",
      inPassword: "",
      upEmail: "",
      upPassword: "",
      uid: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signIn = event => {
    event.preventDefault();
    alert("Credentials were submitted: " + JSON.stringify(this.state));
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.inEmail, this.state.inPassword)
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });
  };

  signUp = event => {
    event.preventDefault();
    alert("Credentials were submitted: " + JSON.stringify(this.state));
    firebase.auth().createUserWithEmailAndPassword(this.state.upEmail, this.state.upPassword)
      .catch((error) => {
        var errorCode = error.code;
        console.log(`GOT ERROR: ` + errorCode)
        if (errorCode == 'auth/weak-password') return // password to weak. Minimal 6 characters
        if (errorCode == 'auth/email-already-in-use') return // Return a email already in use error
      })
      .then(() => {
        let userUid = firebase.auth().currentUser.uid;
        // var db = firebase.firestore();

        firebase.firestore().collection('users').doc(userUid).set({
          email: this.state.upEmail,
        });
      });
  }

  render() {
    const { user, signOut } = this.props;
    // if (user && user.uid) {
    //   this.handleUserIn(user);
    // }

    return (
      <div className="App">
        <header className="App-header">
          {user ? <p>Hello, {user.email}</p> : <p>Please sign in.</p>}

          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
              <React.Fragment>
                <form onSubmit={this.signIn}>
                  <div>
                    <label>
                      Email:
                    <input
                        type="text"
                        name="inEmail"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Password:
                    <input
                        type="text"
                        name="inPassword"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <input type="submit" value="Sign in with Email, Password" />
                </form>
                <form onSubmit={this.signUp}>
                  <div>
                    <label>
                      Email:
                    <input
                        type="text"
                        name="upEmail"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Password:
                    <input
                        type="text"
                        name="upPassword"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <input type="submit" value="Sign up with Email, Password" />
                </form>
              </React.Fragment>
            )}
        </header>
      </div>
    );
  }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
