import React from 'react';
import '../../styles/formInput.css';

const FormInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label className="formLabel">{label}</label>
    <div className="formInput">
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="inputError">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default FormInput;
