import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div>
      <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-3 mx-auto shadow">
            <div className="from-group">
              <h1>Log in with Google</h1>
              <button style={{width: "100%"}} className="btn btn-danger" onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
          </div>
          {/* <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={loginBg} alt="" />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
