import React, { useMemo } from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, DialogActions } from '@material-ui/core';
import { InputAdornment, MenuItem } from '@material-ui/core';

import { addPlayer } from '../../appState/playersSlice';
import { COUNTRIES } from '../../constants';
import playerValidationSchema from '../../utils/validation/playerValidationSchema';
import FormFieldInput from '../../common/FormFieldInput/FormFieldInput';

const AddPlayerForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(onClose());

  const initialValues = {
    name: '',
    winnings: null,
    country: '',
    imageUrl: null,
  };

  const onSubmit = async (values) => {
    const data = values;
    dispatch(addPlayer(data));
    handleClose();
  };

  const formikConfig = {
    initialValues,
    onSubmit,
    validationSchema: playerValidationSchema,
    validateOnChange: false,
  };

  //IE does not support Object.entities out of the box as of 9/24/2020
  const countryList = useMemo(() => {
    return Object.keys(COUNTRIES).map((country) => (
      <MenuItem key={country} value={country}>
        {COUNTRIES[country]}
      </MenuItem>
    ));
  }, []);

  return (
    <Formik {...formikConfig}>
      {({ touched, errors, isSubmitting }) => (
        <Form noValidate>
          <div className="dialog__body">
            <div className="dialog__form">
              <div className="dialog__form__item">
                <Field
                  as={FormFieldInput}
                  autoFocus
                  name="name"
                  label="Name"
                  required
                  errors={touched.name ? errors.name : null}
                />
              </div>
              <div className="dialog__form__item">
                <Field
                  as={FormFieldInput}
                  name="winnings"
                  label="Winnings"
                  required
                  errors={touched.winnings ? errors.winnings : null}
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="dialog__form__item">
                <Field
                  name="country"
                  label="Country"
                  required
                  select
                  errors={touched.country ? errors.country : null}
                  as={FormFieldInput}
                >
                  {countryList}
                </Field>
              </div>
              <div className="dialog__form__item">
                <Field
                  label="Image Link"
                  name="imageUrl"
                  errors={touched.imageUrl ? errors.imageUrl : null}
                  as={FormFieldInput}
                />
              </div>
            </div>
          </div>
          <DialogActions className="dialog__footer">
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              disableElevation
              color="primary"
            >
              Add
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
};

export default AddPlayerForm;
