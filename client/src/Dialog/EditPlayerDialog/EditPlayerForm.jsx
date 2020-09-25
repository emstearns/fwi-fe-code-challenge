import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Button, DialogActions } from '@material-ui/core';
import { InputAdornment, MenuItem } from '@material-ui/core';

import { COUNTRIES } from '../../constants';
import playerValidationSchema from '../../utils/validation/playerValidationSchema';
import FormFieldInput from '../../common/FormFieldInput/FormFieldInput';
import { useSelector } from 'react-redux';
import { getPlayerById, editPlayer } from '../../appState/playersSlice';

const EditPlayerForm = ({ onClose, playerId }) => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(onClose());

  const playerData = useSelector((state) => getPlayerById(state, playerId));

  const initialValues = {
    name: playerData.name,
    winnings: playerData.winnings,
    country: playerData.country,
    imageUrl: playerData.imageUrl,
  };

  const onSubmit = async (values) => {
    const data = { ...values, id: playerId };
    dispatch(editPlayer(data));
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
              Save
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
};

EditPlayerForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  playerId: PropTypes.string.isRequired,
};

export default EditPlayerForm;
