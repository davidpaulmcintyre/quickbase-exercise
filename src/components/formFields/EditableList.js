import React from 'react';
import { Field } from 'redux-form';
import ListItem from './ListItem';
import FormInput from './FormInput';
import EditableListItem from './EditableListItem';
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
          <button
            type="button"
            onClick={() => fields.push({ choice: 'New value', canEdit: false })}
          >
            {'Add item'}
          </button>
        </li>
        {fields.map((item, ix) => {
          console.log(item);
          return (
            <li key={ix}>
              <button
                type="button"
                title="Delete"
                onClick={() => fields.remove(ix)}
              >
                {'x'}
              </button>

              <Field
                name={`${item}.canEdit`}
                component={FormInput}
                type="checkbox"
                className="cboxSmall"
              />
              <Field
                name={`${item}.choice`}
                show={'sdfsfd'}
                type="text"
                component={EditableListItem}
                onChangeAction={value =>
                  console.log(`New edited value: ${value}`)}
              />

              <Field name={item} type="text" component={ListItem} />

            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EditableList;
