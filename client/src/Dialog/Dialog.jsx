import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog as DialogWrapper } from '@material-ui/core/';

import { closeDialog } from '../appState/dialogSlice';
import { DIALOG_TYPES } from './dialogTypes';
import './Dialog.scss';

const Dialog = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeDialog());

  const { visible, dialogType, dialogProps } = useSelector(
    (state) => state.dialog
  );

  if (!visible || !dialogType) {
    return null;
  }

  const DialogInnerContent = DIALOG_TYPES[dialogType];

  return (
    <DialogWrapper open={visible} onClose={handleClose}>
      <DialogInnerContent onClose={handleClose} {...dialogProps} />
    </DialogWrapper>
  );
};

export default Dialog;
