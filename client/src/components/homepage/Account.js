import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountInfo extends Component {
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
            <div className="col span-1-of-2 col1">
              <span className="accName">Name:</span>
            </div>
            <div className="col span-1-of-2">
              <span>David Cheng</span>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-2 col1">
              <span className="accEmail">Email:</span>
            </div>
            <div className="col span-1-of-2">
              <span>David Cheng</span>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-2 col1">
              <span className="accCredits">Credits:</span>
            </div>
            <div className="col span-1-of-2">
              <span>David Cheng</span>
            </div>
          </div>
          <div className="row">
            <div className="col span-1-of-2 col1">
              <span className="accPlan">Current Plan:</span>
            </div>
            <div className="col span-1-of-2">
              <span>David Cheng</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
