import React from 'react';

import EditPlayerForm from './EditPlayerForm';
import DialogContent from '../DialogContent';

const EditPlayerDialog = (props) => {
  return (
    <DialogContent title="Edit Player">
      <EditPlayerForm {...props} />
    </DialogContent>
  );
};

export default EditPlayerDialog;
