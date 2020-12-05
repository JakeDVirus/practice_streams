import React, {useEffect} from 'react';
import { connect } from "react-redux";

import classes from './GoogleAuth.module.css'
import { Button } from '@material-ui/core';

import { authChange } from "../actions/index";

const GoogleAuth = ({authStatusss, onAuthChange}) => {
  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        const authStatus = window.gapi.auth2.getAuthInstance().isSignedIn.get();
        onAuthChange(authStatus)
      });
    
  }

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut()
    .then(() => {
      const authStatus = window.gapi.auth2.getAuthInstance().isSignedIn.get();
      onAuthChange(authStatus)
    });
  }

  useEffect(() => {
    //GAPI AUTH2 USE EFFECT

    /*****************************************
    **  FUNCTION initialize google signin   **
    ******************************************/
    const initialize_GoogleSignin = () => {
      window.gapi.load("auth2", () => {
        window.gapi.auth2.init({
          client_id: '501650894583-ktqu1ssvcmoq11g6ln4biesthpq7cu4r.apps.googleusercontent.com',
          scope: 'email'
        }).then(() => {
          const authStatus = window.gapi.auth2.getAuthInstance().isSignedIn.get();
          onAuthChange(authStatus);
        });
      })
    };

    /***********************************************
    **  Inserting gpai script in HTML Body bottom **
    ************************************************/

    const insertGapiScript = () => {
      const scriptElm = document.createElement("script");
      scriptElm.src = "https://apis.google.com/js/platform.js"
      scriptElm.onload = () => {
        initialize_GoogleSignin();
      }
      document.body.appendChild(scriptElm);
    };

    insertGapiScript()
  }, [onAuthChange]);  

  const renderedAuthButton = (() => {
    switch (authStatusss) {
      case null:
        return null;
      case true:
        return <Button onClick={onSignOutClick} color="inherit">Sign Out</Button>;
      default:
        return (
          <button 
            className={classes.loginWithGoogleBtn}
            onClick={onSignInClick}
          >
            Sign in with google
          </button>
        );
    }
  })();

  return (
    renderedAuthButton
  );
};

const mapStateToProps = (state) => {
  return {
    authStatusss: state.auth.isSignedIn
  }
};

const mapDispatchToProps = (dispatch) => ({
  onAuthChange: (auth) => dispatch(authChange(auth))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);