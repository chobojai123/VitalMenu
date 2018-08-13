import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import Header from './Header';
import Features from './Features';
import Meals from './Meals';
import Steps from './Steps';
import Cities from './Cities';
import Testimonials from './Testimonials';
import Plans from './Plans';
import Feedback from './Feedback';
import Footer from './Footer';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <Waypoint
          onEnter={() => {
            document.querySelector('.navbar').classList.add('sticky');
          }}
          onLeave={() => {
            document.querySelector('.navbar').classList.remove('sticky');
          }}
          topOffset="40px"
        />
        <Meals />
        <Steps />
        <Cities />
        <Testimonials />
        <Plans />
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
