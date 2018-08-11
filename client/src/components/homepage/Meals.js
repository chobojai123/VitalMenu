import React from 'react';

const Meals = () => {
  return (
    <section className="section-meals" id="meals">
      <div>
        <ul className="meals-showcase">
          <li>
            <figure className="meals-photo">
              <img
                src="../images/1.jpg"
                alt="Korean bibimbap with egg and vegetables"
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src="../images/2.jpg"
                alt="Simple italian pizza with cherry tomatoes"
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src="../images/3.jpg"
                alt="Chicken breast steak with vegetables"
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img src="../images/4.jpg" alt="Autumn pumpkin soup" />
            </figure>
          </li>
        </ul>
        <ul className="meals-showcase clearfix">
          <li>
            <figure className="meals-photo">
              <img
                src="../images/5.jpg"
                alt="Paleo beef steak with vegetables"
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src="../images/6.jpg"
                alt="Healthy baguette with egg and vegetables"
              />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img src="../images/7.jpg" alt="Burger with cheddar and bacon " />
            </figure>
          </li>
          <li>
            <figure className="meals-photo">
              <img
                src="../images/8.jpg"
                alt="Granola with cherries and strawberriesp"
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Meals;
