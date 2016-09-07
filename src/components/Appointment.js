import React from 'react';
import { connect } from 'react-redux';
import { goTo } from '../actions/actions';
import moment from 'moment';

class Appointment extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div>
        <h2>CommuteCall</h2>
        <div>Would you like to schedule a CommuteCall with XYZ at the following time?</div>
        <div>Click the button below to confirm.</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.query.name;
  const date = ownProps.query.date;
  const dateFormatted = moment(date);
  return {
    name,
    dateFormatted
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goTo: (id) => {
      dispatch(goTo(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointment)
