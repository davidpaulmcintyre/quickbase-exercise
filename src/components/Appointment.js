import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { goTo } from '../actions/actions';
import moment from 'moment';
import '../styles/appointment.css';
var apns = require("apns"), options, connection, notification;

class Appointment extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  sendNotification() {
    const options = {
      keyFile : '../../aps_dev_key_decrypted.pem',
      certFile : '../../config/aps_dev_cert.pem',
      debug : true
    };
    
    connection = new apns.Connection(options);
    
    notification = new apns.Notification();
    notification.device = new apns.Device(this.props.token);
    notification.alert = `Your CommuteCall is confirmed for ${this.props.date}`;
    console.log(notification.device);
    connection.sendNotification(notification);
  }

  confirm() {
    this.sendNotification();

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
  const token = ownProps.location.query.id;
  return {
    first,
    last,
    date,
    token
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
