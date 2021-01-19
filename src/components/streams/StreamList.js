import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { fetchStreams } from "../../actions/index";
import StreamDelete from './StreamDelete';

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px 30px 0 20px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  list: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "flex-start",
    marginLeft: "-20px"
  },
  listItem: {
    //maxWidth: "380px",
    backgroundColor: indigo[50],
    marginTop: "5px",
    marginLeft: "20px"
  },
  listItem__buttons: {
    display: "flex",
    alignSelf: "flex-end"
  },
  listItemAvatar: {
    alignSelf: "center"
  },
  avatar: {
    color: indigo[400],
    backgroundColor: indigo[100],
    marginTop: "6px",
    alignItems: "center",
  },
  editButton: {
    color: indigo[300]
  },
  deleteButton: {
    color: red[400]
  },
  buttonCreate: {
    position: 'fixed',
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    height: '80px',
    width: '80px'
  },
  addIcon: {
    fontSize: "40px"
  },
  userName: {
    marginLeft: "20px"
  }
}));

const StreamList = props => {
  const { auth, streams, fetchStreams } = props
  const classes = useStyles();

  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  //*********************************************
  //******** render--AdminButtons *****************

  const renderButtonsGroup = (stream) => {
    if (auth.userId === stream.userId) {
      return (
        <div className={classes.listItem__buttons}>
          <RouterLink to={`streams/edit/:${stream.id}`}>
            <IconButton className={classes.editButton}>
              <EditIcon />
            </IconButton>
          </RouterLink>
          <StreamDelete stream={stream}/>
        </div>
      )
    }
    return null;
  };

  //*********************************************
  //******** Render--StreamList *****************

  const renderStreamsList = streams.map(stream => (
    <React.Fragment key={stream.id} >
      <ListItem alignItems="flex-start" className={classes.listItem}>
        <ListItemAvatar className={classes.listItemAvatar}>
          <Avatar className={classes.avatar}>
            <AccountBoxTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<RouterLink to={`/streams/${stream.id}`} style={{textDecoration: "none"}}>{stream.title}</RouterLink>}
          secondary={
            <React.Fragment>
              {stream.description}
              <span className={classes.userName}>
                ~ {stream.userName}
              </span>
            </React.Fragment>
          }
        />
        {renderButtonsGroup(stream)}
      </ListItem>
    </React.Fragment>
  ));

  //*************************************************
  //******** Rendered--button-createStream **********

  const renderedButton_createStream = (
    <>
      {auth.isSignedIn &&
        <RouterLink to="/streams/new" style={{ textDecoration: "none" }}>
          <Fab color="secondary" className={classes.buttonCreate} aria-label="add">
            <AddIcon className={classes.addIcon} />
          </Fab>
        </RouterLink>
      }
    </>
  )

  return (
    <div className={classes.root}>
      {renderedButton_createStream}
      <div className={classes.header}>
        <Typography variant="h3">
          Streams
        </Typography>
      </div>
      <List className={classes.list} disablePadding>
        {renderStreamsList}
      </List>
    </div>
  );
};

const mapStateToProps = state => ({
  streams: Object.values(state.streams),
  auth: state.auth
});

export default connect(mapStateToProps, {
  fetchStreams,
})(StreamList);
