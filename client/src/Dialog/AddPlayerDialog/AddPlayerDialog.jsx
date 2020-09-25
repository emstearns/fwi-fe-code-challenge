import React from 'react';

import DialogContent from '../DialogContent';
import AddPlayerForm from './AddPlayerForm';

const AddPlayerDialog = (props) => {
  return (
    <DialogContent title="Add Player">
      <AddPlayerForm {...props} />
    </DialogContent>
  );
};

export default AddPlayerDialog;
