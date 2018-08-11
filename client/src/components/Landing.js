import React from 'react';

const Landing = () => {
  return (
    <div className="homepage">
      <header>
        <nav>
          <div class="row">
            <img
              src="./images/megabytes-white.png"
              alt="Megabytes Logo"
              class="logo"
            />
            <img
              src="./images/megabytes.png"
              alt="Megabytes Logo"
              class="logo-black"
            />
            <ul class="main-nav js--main-nav">
              <li>
                <a href="#features">Food Delivery</a>
              </li>
              <li>
                <a href="#works">How it works</a>
              </li>
              <li>
                <a href="#cities">Our cities</a>
              </li>
              <li>
                <a href="#signup">Sign up</a>
              </li>
            </ul>
            <a class="mobile-nav-icon js--nav-icon">
              <i class="ion-navicon-round" />
            </a>
          </div>
        </nav>
        <div class="hero-text-box">
          <h1>
            Goodbye unhealthy food.
            <br />
            Hello healthy meals.
          </h1>
          <a class="btn btn-full js--scroll-to-plans" href="#">
            I'm hungry
          </a>
          <a class="btn btn-ghost js-scroll-to-start" href="#">
            Show me more
          </a>
        </div>
      </header>
    </div>
  );
};

export default Landing;
