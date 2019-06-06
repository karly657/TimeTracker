import React from 'react'
import { Field, ErrorMessage } from 'formik';

/**
 * Generic component for inputs
 * @param {object} obj 
 * @param {string} obj.name Field name
 * @param {string} obj.label Field label
 */
const Fieldset = ({ name, label, ...rest }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <Field className="form-control" id={name} name={name} {...rest} />
    <ErrorMessage name={name} />
  </div>
);

export default Fieldset;