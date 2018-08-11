import React from 'react';

const Cities = () => {
  return (
    <section className="section-cities" id="cities">
      <div className="row">
        <h2>We're currently in these cities</h2>
      </div>
      <div className="row js--wp-3">
        <div className="col span-1-of-4 box">
          <img
            src="../images/los-angeles.jpg"
            alt="locations"
            className="cities-photos"
          />
          <h3>Los Angeles</h3>
          <div className="city-feature">
            <i className="ion-ios-person icon-small" />
            1600+ happy eaters
          </div>
          <div className="city-feature">
            <i className="ion-ios-star icon-small" />
            60+ top chefs
          </div>
          <div className="city-feature">
            <i className="ion-social-twitter icon-small" />
            <a href="#">@MegaBytes_LA</a>
          </div>
        </div>
        <div className="col span-1-of-4 box">
          <img
            src="../images/san-francisco.jpg"
            alt="locations"
            className="cities-photos"
          />
          <h3>San Francisco</h3>
          <div className="city-feature">
            <i className="ion-ios-person icon-small" />
            3700+ happy eaters
          </div>
          <div className="city-feature">
            <i className="ion-ios-star icon-small" />
            160+ top chefs
          </div>
          <div className="city-feature">
            <i className="ion-social-twitter icon-small" />
            <a href="#">@MegaBytes_SF</a>
          </div>
        </div>
        <div className="col span-1-of-4 box">
          <img
            src="../images/seattle.jpg"
            alt="locations"
            className="cities-photos"
          />
          <h3>Seattle</h3>
          <div className="city-feature">
            <i className="ion-ios-person icon-small" />
            2300+ happy eaters
          </div>
          <div className="city-feature">
            <i className="ion-ios-star icon-small" />
            110+ top chefs
          </div>
          <div className="city-feature">
            <i className="ion-social-twitter icon-small" />
            <a href="#">@MegaBytes_SEA</a>
          </div>
        </div>
        <div className="col span-1-of-4 box">
          <img
            src="../images/san-diego.jpg"
            alt="locations"
            className="cities-photos"
          />
          <h3>San Diego</h3>
          <div className="city-feature">
            <i className="ion-ios-person icon-small" />
            1200+ happy eaters
          </div>
          <div className="city-feature">
            <i className="ion-ios-star icon-small" />
            50+ top chefs
          </div>
          <div className="city-feature">
            <i className="ion-social-twitter icon-small" />
            <a href="#">@MegaBytes_SD</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
