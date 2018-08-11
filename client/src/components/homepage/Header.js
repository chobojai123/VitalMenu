import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <a href="#features">Food Delivery</a>
          </li>,
          <li key="2">
            <a href="#works">How it works</a>
          </li>,
          <li key="3">
            <a href="#cities">Our cities</a>
          </li>,
          <li key="4">
            <a href="/auth/google">Login With Google</a>
          </li>,
        ];
      default:
        return [
          <li key="1">
            <a href="#features">Food Delivery</a>
          </li>,
          <li key="2">
            <a href="#works">How it works</a>
          </li>,
          <li key="3">
            <a href="#cities">Our cities</a>
          </li>,
          <li key="4">
            <a href="#signup">Sign up</a>
          </li>,
          <li key="5">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  render() {
    return (
      // <nav>
      //   <div className="header nav-wrapper">
      //     <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
      //       SurveyNation
      //     </Link>
      //     <ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
      //   </div>
      // </nav>
      <div>
        <nav>
          <div className="row">
            <img
              src="./images/megabytes-white.png"
              alt="Megabytes Logo"
              className="logo"
            />
            <img
              src="./images/megabytes.png"
              alt="Megabytes Logo"
              className="logo-black"
            />
            <ul className="main-nav js--main-nav">{this.renderContent()}</ul>
            <a className="mobile-nav-icon js--nav-icon">
              <i className="ion-navicon-round" />
            </a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>
            Goodbye unhealthy food.
            <br />
            Hello healthy meals.
          </h1>
          <a className="btn btn-full js--scroll-to-plans" href="#">
            I'm hungry
          </a>
          <a className="btn btn-ghost js-scroll-to-start" href="#">
            Show me more
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

// return [
//   <li key="1">
//     <Payments />
//   </li>,
//   <li key="3" style={{ margin: '0 10px' }}>
//     Credits: {this.props.auth.credits}
//   </li>,
//   <li key="2">
//     <a href="/api/logout">Logout</a>
//   </li>,
// ];
