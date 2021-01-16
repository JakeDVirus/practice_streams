import React from 'react';
import { connect } from "react-redux";

import StreamForm from './reusuableComponents/StreamForm';
import { createStream } from "../../actions/index";

const StreamCreate = ({createStream}) => {
  return (
    <StreamForm 
      streamFormType="createStream"
      onFormSubmit={createStream}
      pageTitle="Create Stream"
    />
  );
};

export default connect(null, {createStream})(StreamCreate);