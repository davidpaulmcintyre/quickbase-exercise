import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { goTo } from '../actions/actions';
import moment from 'moment';
import '../styles/appointment.css';

class Appointment extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className='headerContainer'>
          <div className='header'>CommuteCall</div>
        </div>
        <div className='summaryContainer'>
          <div className='summary'>Would you like to schedule a CommuteCall with
            <span className='name'>{this.props.first} {this.props.last}</span>
             at the following time?
             </div>
        </div>
        <div className='time'>{this.props.date}</div>
        <div className='confirm'>
          <div>Click the button below to confirm.</div>
          <Link to={`/confirmation?first=${this.props.first}&last=${this.props.last}&date=${this.props.location.query.date}`}>
          Confirm</Link>
        </div>
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
  return {
    first,
    last,
    date
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
