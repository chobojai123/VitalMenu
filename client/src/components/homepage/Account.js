import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../Payments';

class AccountInfo extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return [
          <li key="1">
            <span> </span>
          </li>,
          <li key="2">
            <span> </span>
          </li>,
          <li key="3">
            <span> </span>
          </li>,
          <li key="4">
            <span> </span>
          </li>,
        ];
      case false:
        return [
          <li key="1">
            <span>N/A</span>
          </li>,
          <li key="2">
            <span>N/A</span>
          </li>,
          <li key="3">
            <span>N/A</span>
          </li>,
          <li key="4">
            <span>N/A</span>
          </li>,
        ];
      default:
        return [
          <li key="1">
            <span>{this.props.auth.name}</span>
          </li>,
          <li key="2">
            <span>{this.props.auth.email}</span>
          </li>,
          <li key="3">
            <span>${this.props.auth.credits}</span>
          </li>,
          <li key="4">
            <span>None</span>
          </li>,
        ];
    }
  }

  render() {
    return (
      <div className="account">
        <div className="navbar">
          <div className="row">
            <Link to={'/'} className="link">
              <img
                src="./images/megabytes-white.png"
                alt="Megabytes Logo"
                className="logo"
              />
            </Link>
            <ul className="main-info js--main-nav">
              <li>
                <Payments />
              </li>
              <li>
                <a className="accountLogOut" href="/api/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <h2 className="accTitle">Account Details</h2>
        </div>
        <div className="accDetail">
          <div className="row">
            <ul>
              <li>
                <span>Name:</span>
              </li>
              <li>
                <span>Email:</span>
              </li>
              <li>
                <span>Credit:</span>
              </li>
              <li>
                <span>Current Plan:</span>
              </li>
            </ul>
            <ul>{this.renderContent()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(AccountInfo);
