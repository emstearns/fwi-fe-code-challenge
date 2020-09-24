import React from 'react';
import { DialogTitle } from '@material-ui/core';
import AddPlayerForm from './AddPlayerForm';

const AddPlayerDialog = (props) => {
  return (
    <div aria-labelledby="Add Player" aria-describedby="Add player form">
      <DialogTitle className="dialog__header">Add Player</DialogTitle>
      <div className="dialog__content">
        <AddPlayerForm {...props} />
      </div>
    </div>
  );
};

export default AddPlayerDialog;
