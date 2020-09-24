import * as yup from 'yup';
import { COUNTRIES } from '../../constants';

const playerValidationSchema = yup.object({
  name: yup.string().trim().required('Name cannot be blank.'),
  winnings: yup
    .number('Winnings must be a number.')
    .min(0, 'Winnings must be a positive number.')
    .required('Winnings cannot be blank.'),
  country: yup
    .string()
    .oneOf(Object.keys(COUNTRIES), 'Country must be a valid country.')
    .required('Country cannot be blank.'),
  imageUrl: yup
    .string()
    .trim()
    .url('Link must be a valid URL.')
    .optional()
    .nullable()
    .default(null),
});

export default playerValidationSchema;
