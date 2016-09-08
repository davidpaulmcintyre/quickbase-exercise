import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import '../styles/appointment.css';

class Confirmation extends React.Component {

  render() {
    return (
      <div>
        <div className='headerContainer'>
          <div className='header'>CommuteCall</div>
        </div>
        <div className='summaryContainer'>
          <div className='summary'>Your CommuteCall appointment is all set!</div>
        </div>
        <div className='confirm'>
          <div className='name'>{this.props.first} {this.props.last}</div>
          <div className='name'>{this.props.date}</div>
        </div>
      </div>
    );
  }
}

Confirmation.defaultProps = {
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

export default connect(mapStateToProps)(Confirmation)
