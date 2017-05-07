import React from 'react';
import { connect } from 'react-redux';
import { getSalesRegionFieldData } from '../actions';
import '../styles/fieldBuilder.css';
import { polyfill } from 'es6-promise';
const ID = 'SALES_REGION';
polyfill();

class FieldBuilder extends React.Component {
  componentWillMount() {
    this.props.getSalesRegionFieldData(ID);
  }

  render() {
    return <div>sdfsds</div>;
  }
}

FieldBuilder.defaultProps = {
  fieldData: {}
};

const mapStateToProps = state => {
  return {
    fieldData: state.sales.region
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSalesRegionFieldData: id => {
      dispatch(getSalesRegionFieldData(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldBuilder);
