import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog as DialogWrapper } from '@material-ui/core/';
import { closeDialog } from '../appState/dialogSlice';
import './Dialog.scss';

const DIALOG_TYPES = {};

const Dialog = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeDialog());

  const { visible, dialogType, dialogProps } = useSelector(
    (state) => state.dialog
  );

  if (!visible || !dialogType) {
    return null;
  }

  const DialogContent = DIALOG_TYPES[dialogType];

  return (
    <DialogWrapper open={visible} onClose={handleClose}>
      <DialogContent onClose={handleClose} {...dialogProps} />
    </DialogWrapper>
  );
};

export default Dialog;
