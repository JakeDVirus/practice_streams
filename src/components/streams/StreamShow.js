import React, { useEffect, useRef } from 'react';
import { connect } from "react-redux";
import flvjs from 'flv.js';

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

import { fetchStream } from "../../actions/index";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px 30px 0 20px"
  },
  video: {
    width: "100%",
    maxWidth: "1020px",
    marginBottom: theme.spacing(4)
  },
  title: {
    marginBottom: theme.spacing(2)
  }
}));

const StreamShow = props => {
  const { stream, fetchStream } = props;
  const streamId = props.match.params.id;
  const classes = useStyles();
  const videoRef = useRef();

  useEffect(() => {
    fetchStream(streamId);
  }, [fetchStream, streamId]);

  if(stream) {
    const flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${streamId}.flv`
    });
    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
  }

  if (!stream) {
    return <h1>Loading....</h1>;
  };

  return (
    <div className={classes.root}>
      <video ref={videoRef} className={classes.video} controls />
      <Typography variant="h4" className={classes.title}>{stream.title}</Typography>
      <Typography variant="body1">{stream.description}</Typography>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamShow); 