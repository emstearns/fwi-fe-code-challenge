import React from 'react';
import { DialogActions, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { deletePlayer } from '../../appState/playersSlice';
import { closeDialog } from '../../appState/dialogSlice';
import DialogContent from '../DialogContent';

const DeletePlayerDialog = (props) => {
  const dispatch = useDispatch();
  const handleCloseDialog = () => dispatch(closeDialog());

  const handleDeletePlayer = () => {
    dispatch(deletePlayer(props.playerId));
    handleCloseDialog();
  };

  return (
    <DialogContent title="Delete Player">
      <div className="dialog__body">
        <p>Are you sure you want to delete this player?</p>
      </div>
      <DialogActions className="dialog__footer">
        <Button variant="outlined" onClick={handleCloseDialog}>
          Cancel
        </Button>
        <Button
          variant="contained"
          disableElevation
          color="primary"
          onClick={handleDeletePlayer}
        >
          Delete
        </Button>
      </DialogActions>
    </DialogContent>
  );
};

export default DeletePlayerDialog;
