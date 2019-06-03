import * as Yup from 'yup';

export const createNoteSchema = Yup.object().shape({
  date: Yup.string()
    .matches(/^\d{2}.\d{2}.\d{4}$/, 'Invalid date')
    .required('Required'),
  hours: Yup.number()
    .moreThan(0)
    .lessThan(24)
    .required('Required')
});

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'The password must be 6 characters long or more.'),
  passwordTwo: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match.')
    .required('Required')
});