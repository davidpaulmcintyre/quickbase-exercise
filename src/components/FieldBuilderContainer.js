import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getSalesRegionFieldData, saveSalesRegionFieldData } from '../actions';
import FieldBuilderForm from './FieldBuilderForm';
import '../styles/fieldBuilderContainer.css';
import { polyfill } from 'es6-promise';
const ID = 'SALES_REGION';
polyfill();

class FieldBuilderContainer extends React.Component {
  componentWillMount() {
    this.props.getSalesRegionFieldData(ID);
  }

  saveForm(formData) {
    // if list of choices doesnt include default, add it
    let choicesValidated = [];
    const choices = formData.choices.map(obj => obj.choice);
    const _default = formData.default;
    if (choices.indexOf(_default) < 0) {
      choicesValidated = choices.concat([_default]);
    } else {
      choicesValidated = choices;
    }
    const data = Object.assign({}, formData, { choices: choicesValidated });
    this.props.saveSalesRegionFieldData(data);
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <h1>{'Field Builder'}</h1>
          <FieldBuilderForm
            initialValues={this.props.fieldData}
            onSubmit={this.saveForm.bind(this)}
          />
        </div>
      </div>
    );
  }
}

FieldBuilderContainer.defaultProps = {
  fieldData: {}
};

const mapStateToProps = state => {
  let data = state.sales.region;
  let choices = data.choices ? data.choices : [];
  const choicesAugmented = choices.map(choice => ({
    choice: choice,
    canEdit: false
  }));

  return {
    fieldData: Object.assign({}, data, { choices: choicesAugmented })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSalesRegionFieldData: id => {
      dispatch(getSalesRegionFieldData(id));
    },
    saveSalesRegionFieldData: formData => {
      dispatch(saveSalesRegionFieldData(formData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  FieldBuilderContainer
);
