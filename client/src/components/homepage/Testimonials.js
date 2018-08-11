import React from 'react';

const Testimonials = () => {
  return (
    <section className="section-testimonials">
      <div className="row">
        <h2>Our customers can't live without us</h2>
      </div>
      <div className="row">
        <div className="col span-1-of-3">
          <blockquote>
            Megabytes is just awesome! I just launched a startup which leaves me
            with no time for cooking, so Megabytes is a life-saver. Now that I
            got used to it, I couldn't live without my daily meals!
            <cite>
              <img src="../images/customer-1.jpg" alt="customer1" />
              David Cheng
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-3">
          <blockquote>
            Inexpensive, healthy and great-tasting meals, delivered right to my
            home. We have lots of food delivery here in Lisbon, but no one comes
            even close to Omifood. Me and my family are so in love!
            <cite>
              <img src="../images/customer-2.jpg" alt="customer1" />
              Tiffany Chan
            </cite>
          </blockquote>
        </div>
        <div className="col span-1-of-3">
          <blockquote>
            I was looking for a quick and easy food delivery service in San
            Franciso. I tried a lot of them and ended up with Megabytes. Best
            food delivery service in the Bay Area. Keep up the great work!
            <cite>
              <img src="../images/customer-3.jpg" alt="customer1" />
              Milton Chow
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
