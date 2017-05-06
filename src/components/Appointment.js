import React from "react";
import { connect } from "react-redux";
import "../styles/appointment.css";
import fetch from "isomorphic-fetch";
import { polyfill } from "es6-promise";
polyfill();

class Appointment extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  sendNotification() {
    fetch("/notify", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: this.props.token,
        date: this.props.date,
        recordID: this.props.recordID,
        inviteeFirst: this.props.inviteeFirst,
        inviteeLast: this.props.inviteeLast
      })
    })
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      // .then(function(response) {
      //   console.log('ok');
      // })
      .catch(function(error) {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */
      });
  }

  confirm() {
    this.sendNotification();
    const url = `/confirmation?first=${this.props.first}&last=${this.props.last}&date=${this.props.location.query.date}`;
    this.props.history.push(url);
  }

  render() {
    return (
      <div>

        <div className="headerContainer">
          <div className="header">{"Commute Call"}</div>
        </div>

        <div className="summaryContainer">
          <div className="summary">
            {"Please confirm your scheduled call with:"}
          </div>
        </div>
        <div className="nameContainer">
          <div className="name">{this.props.first} {this.props.last} </div>
        </div>
        <div className="nameContainer">
          <div className="name">{"on "}{this.props.date}</div>
        </div>
        <div className="confirmContainer">
          <div className="confirm">
            <button className="confirmButton" onClick={this.confirm.bind(this)}>
              {"Confirm"}
            </button>
          </div>
        </div>

      </div>
    );
  }
}

Appointment.defaultProps = {
  first: "",
  last: "",
  dateFormatted: ""
};

const mapStateToProps = (state, ownProps) => {
  // sender
  const first = ownProps.location.query.first;
  const last = ownProps.location.query.last;
  // invitee
  const inviteeFirst = ownProps.location.query.inviteeFirst;
  const inviteeLast = ownProps.location.query.inviteeLast;
  const recordID = ownProps.location.query.recordID;
  const date = ownProps.location.query.date;
  const token = ownProps.location.query.token;
  return {
    first,
    last,
    inviteeFirst,
    inviteeLast,
    recordID,
    date,
    token
  };
};
export default connect(mapStateToProps, null)(Appointment);
