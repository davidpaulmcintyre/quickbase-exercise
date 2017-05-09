import React, { Component } from 'react';
import { Field } from 'redux-form';
import '../../styles/listItem.css';

const EditableListItem = props => {
  let component = <div />;
  if (props.show) {
    component = (
      <input
        {...props.input}
        type="text"
        onChange={e => {
          props.onChangeAction(props.input.value);
          props.input.onChange(e);
        }}
      />
    );
  }
  return component;
};

/*const EditableListItem = obj => {
  const field = obj.choice;
  let component = <div />;
  // if (field.input.canEdit) {
  component = (
    <input
      {...field.input}
      type="text"
      onChange={e => {
        field.onChangeAction(field.input.value);
        field.input.onChange(e);
      }}
    />
  );
  return component;
  // }
};*/

export default EditableListItem;
