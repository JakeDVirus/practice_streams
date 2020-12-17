import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import DrawerMUI from './DrawerMUI';

//IMPORT Exclusive addition requirement
import GoogleAuth from '../GoogleAuth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const navArrayToRenderedList_withRouter = (arr) => {
  let navRenderedList = null;
  if (arr !== null) {
    navRenderedList = arr.map((item) => (
      <RouterLink key={item.title} to={item.url} style={{ textDecoration: "none", color: "inherit" }}>
        <Button key={item.title} color="inherit">{item.title}</Button>
      </RouterLink>
    ));
  }
  return navRenderedList;
}

const navArrayToRenderedList_withoutRouter = (arr) => {
  let navRenderedList = null;
  if (arr !== null) {
    navRenderedList = arr.map(item => (
      <a key={item.title} href={item.url} style={{ textDecoration: "none", color: "inherit" }}>
        <Button key={item.title} color="inherit">{item.title}</Button>
      </a>
    ));
  }
  return navRenderedList;

}


/******************************************************
*******************************************************
                   COMPONENT STARTS
*******************************************************
*******************************************************/

const MenuAppBar = ({ navList, drawerAnchor, auth=true }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //nav items
  const selectedNavItems = (() => {
    switch (auth) {
      case null: //auth query in process
        return null;
      case false:
        return navList.onLoggedOutList;
      default:
        return navList.onLoggedInList;
    }
  })();

  //authNav items
  const selectedAuthNavItems = (() => {
    switch (auth) {
      case null: //auth query in process
        return null;
      case false:
        return navList.authNavList.onLoggedOutList;
      default:
        return navList.authNavList.onLoggedInList;
    }
  })();

  //Standard menu || Drawer
  const renderedNavItems =
    isMobile
      ? <DrawerMUI
          anchor={drawerAnchor}
          selectedNavItems={selectedNavItems}
          selectedAuthNavItems={selectedAuthNavItems}
        />
      : <div>
          {navArrayToRenderedList_withRouter(selectedNavItems)}
          {navArrayToRenderedList_withoutRouter(selectedAuthNavItems)}
          <GoogleAuth />
        </div>

  const renderedLogo = (
    <Typography variant="h6" className={classes.title}>
      <RouterLink to={navList.home.url} style={{color: "inherit", textDecoration: "none"}}>
        Logo
      </RouterLink>
    </Typography>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="xl" style={{padding: "0"}}>
          <Toolbar>
            {renderedLogo}
            {renderedNavItems}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

/******************************************************
*******************************************************
                   COMPONENT END
*******************************************************
*******************************************************/

export default MenuAppBar;


