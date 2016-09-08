import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
        <div>Would you like to schedule a CommuteCall with {this.props.first} {this.props.last} at the following time?</div>
        {this.props.dateFormatted}
        <div>Click the button below to confirm.</div>
        <Link to={`/confirmation?first=${this.props.first}&last=${this.props.last}&date=${this.props.location.query.date}`}>
        Confirm</Link>
      </div>
    );
  }
}

Appointment.defaultProps = {
  first: '',
  last: '',
  dateFormatted: ''
}

const mapStateToProps = (state, ownProps) => {
  const first = ownProps.location.query.first;
  const last = ownProps.location.query.last;
  const date = ownProps.location.query.date;
  const dateFormatted = moment(date).format('LLLL');
  return {
    first,
    last,
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
