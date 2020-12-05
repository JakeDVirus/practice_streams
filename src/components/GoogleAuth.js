import React, {useEffect} from 'react';
import { connect } from "react-redux";

import classes from './GoogleAuth.module.css'
import { Button } from '@material-ui/core';

import { signIn, signOut } from "../actions/index";

const GoogleAuth = ({authStatusss, onSignIn, onSignOut}) => {

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        const userId = window.gapi.auth2.getAuthInstance().currentUser.get().getId();
        onSignIn(userId)
      });
  }

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut()
    .then(() => {
      onSignOut();
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
        }).then( () => {
          const authStatus = window.gapi.auth2.getAuthInstance().isSignedIn.get();
          let userId = null;
          if(authStatus){
            userId = window.gapi.auth2.getAuthInstance().currentUser.get().getId();
            onSignIn(userId);
          } else {
            onSignOut();
          };
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
  }, [onSignIn, onSignOut]);  

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
  onSignIn: (id) => dispatch(signIn(id)),
  onSignOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);