import React, {useEffect} from 'react';
import { connect } from "react-redux";

import { fetchStream, editStream } from "../../actions/index";
import StreamForm from './reusuableComponents/StreamForm';

const StreamEdit = props => {
  const {fetchStream, editStream, stream} = props;
  const editStreamId = props.match.params.id.slice(1);

  useEffect(() => {
    fetchStream(editStreamId)
  }, [fetchStream, editStreamId]);

  if(!stream) {
    return "loading the data";
  }

  return (
    <StreamForm
      streamFormType="editStream" 
      initialValues={{title: stream.title, description: stream.description}}
      streamId={stream.id}
      pageTitle="Edit Stream"
      onFormSubmit={editStream}
    />

  );
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[Number(ownProps.match.params.id.slice(1))]
})

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);