import React from 'react';
import { connect } from 'react-redux';
import '../styles/appointment.css';

class Confirmation extends React.Component {
  render() {
    return (
      <div>
        <div className="headerContainer">
          <div className="header">{'Commute Call'}</div>
        </div>

        <div className="summaryContainer">
          <div className="summary">
            {'Thank you! Your appointment is all set.'}
          </div>
        </div>
        <div className="nameContainer">
          <div className="name">{this.props.first} {this.props.last} </div>
        </div>
        <div className="nameContainer">
          <div className="name">{'on '}{this.props.date}</div>
        </div>
      </div>
    );
  }
}

Confirmation.defaultProps = {
  first: '',
  last: '',
  dateFormatted: ''
};

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

export default connect(mapStateToProps)(Confirmation);
