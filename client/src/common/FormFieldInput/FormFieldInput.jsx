import React from 'react';
import { TextField } from '@material-ui/core';

import './FormFieldInput.scss';

const FormFieldInput = (props) => {
  if (!props.children) {
    return (
      <TextField
        className="form-field"
        id={props.name}
        error={!!props.errors}
        helperText={props.errors}
        variant="outlined"
        margin="dense"
        fullWidth
        {...props}
      />
    );
  } else {
    return (
      <TextField
        className="form-field"
        id={props.name}
        error={!!props.errors}
        helperText={props.errors}
        variant="outlined"
        margin="dense"
        fullWidth
        {...props}
      >
        {props.children}
      </TextField>
    );
  }
};

export default FormFieldInput;
