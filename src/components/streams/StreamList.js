import React, {useEffect} from 'react';
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import indigo from '@material-ui/core/colors/indigo';

import { fetchStreams } from "../../actions/index";

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px"
  },
  list: {
    marginTop: "30px",
  },
  listItem: {
    maxWidth: "380px",
    flexDirection: "column",
    backgroundColor: indigo[50],
    marginTop: "5px"
  },
  listItem__main: {
    display: "flex"
  }, 
  listItem__footer: {
    alignSelf: "flex-end"
  },
  avatar: {
    color: indigo[400],
    backgroundColor: indigo[100]
  },
  button: {
    color: indigo[300]
  }
}));

const StreamList = ({streams, fetchStreams}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);
  
  const renderStreamsList = streams.map(stream => (
    <React.Fragment>
      <ListItem key={stream.id} alignItems="flexStart" className={classes.listItem}>
        <div className={classes.listItem__main}>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <AccountBoxTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={stream.title} secondary={stream.description} />
        </div>
        <div className={classes.listItem__footer}>
          <IconButton  edge="end" className={classes.button}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" className={classes.button}>
            <DeleteIcon />
          </IconButton>
        </div>
      </ListItem>
    </React.Fragment>
  ));

  return (
    <div className={classes.root}>
      <Typography variant="h3">
        Streams
      </Typography>
      <List className={classes.list} disablePadding>
        {renderStreamsList}
      </List>
    </div>
  );
};

const mapStateToProps = state => ({
  streams: Object.values(state.streams)
});

export default connect(mapStateToProps, {fetchStreams})(StreamList);