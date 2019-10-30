import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./App.css";
const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signIn = event => {
    event.preventDefault();
    alert("Credentials were submitted: " + JSON.stringify(this.state));
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  render() {
    const { user, signOut } = this.props;
    console.log(user);

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
                      name="email"
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
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <input type="submit" value="Sign in with Email, Password" />
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
