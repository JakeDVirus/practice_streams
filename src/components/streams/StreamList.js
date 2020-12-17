import React, {useEffect} from 'react';
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider'
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import Typography from "@material-ui/core/Typography";

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
    backgroundColor: theme.palette.background.paper
  }
}));

const StreamList = ({streams, fetchStreams}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);
  
  const renderStreamsList = streams.map(stream => (
    <React.Fragment>
      <ListItem key={stream.id} alignItems="flexStart">
        <ListItemAvatar>
          <Avatar>
            <AccountBoxTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={stream.title}
          secondary={stream.description}
        />
      </ListItem>
      <Divider component="li" />
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