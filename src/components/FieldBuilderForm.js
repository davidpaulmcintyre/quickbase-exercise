import React from 'react';
import { Link } from 'react-router';
import { Field, FieldArray, reduxForm } from 'redux-form';
import FormInput from './formFields/FormInput';
import EditableList from './formFields/EditableList';
import {
  required,
  maxLength50,
  validateItemLengths
} from '../validation/validateSalesRegion';
import '../styles/fieldBuilderForm.css';

const FieldBuilderForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const _choices = props.initialValues.choices;

  return (
    <form onSubmit={handleSubmit} className="form">

      <Field
        name="label"
        component={FormInput}
        label={'Label'}
        type="text"
        validate={required}
      />

      <Field
        name="required"
        component={FormInput}
        label={'Required Field'}
        type="checkbox"
      />

      <Field
        name="default"
        component={FormInput}
        label={'Default Value'}
        type="text"
        validate={[required, maxLength50]}
      />

      <FieldArray
        name="choices"
        label="Choices"
        component={EditableList}
        validate={validateItemLengths}
      />

      <Field
        name="displayAlpha"
        component={FormInput}
        label={'Sort alpha'}
        type="checkbox"
      />

      <div className="buttonGroup">
        <button type="submit" disabled={submitting}>{'Save Changes'}</button>
        <Link to="/">{'Cancel'}</Link>
      </div>
    </form>
  );
};

FieldBuilderForm.defaultProps = {
  choices: []
};

FieldBuilderForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired
};

export default reduxForm({
  form: 'salesRegion',
  // validate,
  enableReinitialize: true
})(FieldBuilderForm);
