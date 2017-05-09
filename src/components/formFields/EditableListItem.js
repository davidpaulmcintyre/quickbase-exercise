import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector } from 'redux-form';
import Label from './Label';
import '../../styles/listItem.css';

const selector = formValueSelector('salesRegion');

const ListItem = ({ choice, index, fields, canEdit }) => (
  <li key={index} className="listItem">
    <button title="delete" onClick={() => fields.remove(index)}>{'x'}</button>
    <Field name={`${choice}.canEdit`} type="checkbox" component="input" />
    {canEdit &&
      <Field name={`${choice}.choice`} type="text" component="input" />}
    {!canEdit &&
      <Field name={`${choice}.choice`} type="text" component={Label} />}
  </li>
);

const EditableListItem = connect((state, props) => ({
  canEdit: !!selector(state, `${props.choice}.canEdit`)
}))(ListItem);

export default EditableListItem;
