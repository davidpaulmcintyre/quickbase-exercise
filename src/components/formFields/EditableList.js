import React from 'react';
import { Field } from 'redux-form';
import ListItem from './ListItem';
import '../../styles/fieldBuilderForm.css';
import '../../styles/editableList.css';

const EditableList = props => {
  const { label, fields, meta: { touched, error } } = props;
  return (
    <div className="editableListContainer">
      <label className="formLabel">{label}</label>
      {error && <span className="listError">{error}</span>}
      <ul className="listBox">
        <li>
          <button type="button" onClick={() => fields.push('New value')}>
            {'Add item'}
          </button>
        </li>
        {fields.map((item, ix) => (
          <li key={ix}>
            <button type="button" title="Edit">
              {'Edit'}
            </button>
            <button
              type="button"
              title="Delete"
              onClick={() => fields.remove(index)}
            >
              {'x'}
            </button>
            <Field name={item} type="text" component={ListItem} />

          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableList;
