import React from 'react';
import EditableListItem from './EditableListItem';
import '../../styles/fieldBuilderForm.css';
import '../../styles/editableList.css';

const EditableList = ({ fields, label, meta: { touched, error } }) => (
  <div className="editableListContainer">
    <label className="formLabel">
      {label}
    </label>
    {error && <span className="listError">{error}</span>}
    <ul className="listBox">
      <li>
        <button
          type="button"
          onClick={() => fields.push({ canEdit: false, choice: 'New value' })}
        >
          {'Add item'}
        </button>
      </li>
      {fields.map((item, ix) => (
        <EditableListItem choice={item} fields={fields} index={ix} key={ix} />
      ))}
    </ul>
  </div>
);

export default EditableList;
