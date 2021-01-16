import React, { useState } from 'react';
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteStream } from "../../actions/index";
import StreamDeleteDialog from '../resuableComponents/dialogs/StreamDeleteDialog';


const useStyles = makeStyles(theme => ({
  deleteButton: {
    color: red[400]
  }
}));

const StreamDelete = props => {
  const { stream, deleteStream } = props
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const classes = useStyles();
  
  return (
    <div>
      <IconButton onClick={() => setOpenDeleteDialog(true)} edge="end" className={classes.deleteButton}>
        <DeleteIcon />
      </IconButton>
      <StreamDeleteDialog
        title="Delete Stream"
        description={`Are you sure you want to delete the stream with title ${stream.title}?`}
        onDelete={() => deleteStream(stream.id)}
        onCancel={() => setOpenDeleteDialog(false)}
        negative
        isOpen={openDeleteDialog}
      />
    </div>
  );
};


export default connect(null, {deleteStream})(StreamDelete);