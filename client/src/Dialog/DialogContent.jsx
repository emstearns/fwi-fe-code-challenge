import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle } from '@material-ui/core';

const DialogContent = ({ title, children }) => {
  return (
    <div role="dialog" aria-labelledby={title}>
      <DialogTitle className="dialog__header">{title}</DialogTitle>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

DialogContent.propTypes = {
  title: PropTypes.string,
};

export default DialogContent;
