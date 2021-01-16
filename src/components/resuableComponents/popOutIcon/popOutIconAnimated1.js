import React from 'react'

import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const mainButton = () => (
  <Fab color="secondary" aria-label="edit">
    <MoreVertIcon />
  </Fab>
);

export default props => {
  return (
    <div>
      <div class="btn1">

      </div>
      <div class="btn2">

      </div>
      <div class="btn3">

      </div>
    </div>
  )
}