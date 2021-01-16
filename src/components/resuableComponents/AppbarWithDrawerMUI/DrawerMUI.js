import React from "react";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//IMPORT-- Exclusive addition requirement
import GoogleAuth from '../../GoogleAuth';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const navArrayToRenderedList_withRouter = (arr) => { 
  const navRenderedList = arr.map((item, index) => (
    <RouterLink key={item.title} to={item.url} style={{textDecoration: "none", color: "inherit"}}>
      <ListItem button >
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </RouterLink>
  ));
  return navRenderedList;
}

const navArrayToRenderedList_withoutRouter = (arr) => {
  const navRenderedList = arr.map((item, index) => (
    <a key={item.title} href={item.url} style={{textDecoration: "none", color: "inherit"}}>
      <ListItem button>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </a>
  ));
  return navRenderedList;

}

/******************************************************
*******************************************************
                   COMPONENT STARTS
*******************************************************
*******************************************************/

export default function TemporaryDrawer({ anchor, selectedNavItems, selectedAuthNavItems }) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if ( event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") ) {
      return;
    }
    setIsOpen(open);
  };

  const renderedList = (anchor) => (
    <div 
      className={clsx(classes.list, { [classes.fullList]: anchor === "top" || anchor === "bottom" })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {selectedNavItems && navArrayToRenderedList_withRouter(selectedNavItems)}
        {selectedAuthNavItems && navArrayToRenderedList_withoutRouter(selectedAuthNavItems)}
        <GoogleAuth />
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor={anchor} open={isOpen} onClose={toggleDrawer(false)}>
        {renderedList(anchor)}
      </Drawer>
    </div>
  );
}
