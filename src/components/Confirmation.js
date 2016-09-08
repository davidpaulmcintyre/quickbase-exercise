import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Confirmation extends React.Component {

  render() {
    return (
      <div>
        <h2>CommuteCall</h2>
        <div>Your CommuteCall appointment is all set!</div>
         {this.props.first} {this.props.last}
        <div>{this.props.dateFormatted}</div>
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
  const dateFormatted = moment(date).format('LLLL');
  return {
    first,
    last,
    dateFormatted
  };
};

export default connect(mapStateToProps)(Confirmation)
