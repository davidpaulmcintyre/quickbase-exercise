import React from 'react';
import '../../styles/formInput.css';

const FormInput = ({
  className,
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className={className}>
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
