import React, { Component } from 'react';

import Header from './Header';
import Features from './Features';
import Meals from './Meals';
import Steps from './Steps';
import Cities from './Cities';
import Testimonials from './Testimonials';
import Plans from './Plans';
import Feedback from './Feedback';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <Meals />
        <Steps />
        <Cities />
        <Testimonials />
        <Plans />
      </div>
    );
  }
}

export default Homepage;
