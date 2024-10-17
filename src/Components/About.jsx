import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/Image.about.png';
import img2 from '../img/Mask group.png';
import play from '../img/Play.png';
import user1 from '../img/Ellipse 19.png';
import user2 from '../img/Image.png';
import user3 from '../img/Image (1).png';
import icon1 from '../img/restaurant-menu 1.png';
import icon2 from '../img/Icon.icon.png';
import icon3 from '../img/timer 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/About.css';
const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-cont">
          <div className="about-img">
            <img src={img1} alt="img" />
            <div className="visit">
              <div className="about-card">
                <div className="text">
                  <h3>Come and visit us</h3>
                  <div className="about-info">
                    <div className="about-icon">
                      <FontAwesomeIcon className="fa" icon={faPhone} />
                      <a href="tel:4148570107">(414) 857 - 0107</a>
                    </div>
                    <div className="about-icon">
                      <FontAwesomeIcon className="fa" icon={faEnvelope} />
                      <a href="mailto: happytummy@restaurant.com">
                        happytummy@restaurant.com
                      </a>
                    </div>
                    <div className="about-icon">
                      <FontAwesomeIcon className="fa" icon={faLocationDot} />
                      <Link to="#" className="loc">
                        837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="tittle">
              <h2>We provide healthy food for your family.</h2>
              <p>
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance. Rooted in city's rich culinary culture, we aim
                to honor our local roots while infusing a global palate.
              </p>
              <p className="pppp">
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="auth">
        <div className="authentic">
          <div className="img-auth">
            <div className="play">
              <img src={play} alt="" />
            </div>
            <div className="text-auth">
              <h3>Feel the authentic & original taste from us</h3>
            </div>
          </div>
        </div>
        <div className="feature-auth">
          <div className="feat-auth">
            <img src={icon1} alt="icon" />
            <div className="info-auth">
              <h5>Multi Cuisine</h5>
              <p>
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
          <div className="feat-auth">
            <img src={icon2} alt="icon" />
            <div className="info-auth">
              <h5>Easy To Order</h5>
              <p>
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
          <div className="feat-auth">
            <img src={icon3} alt="icon" />
            <div className="info-auth">
              <h5>Fast Delivery</h5>
              <p>
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="content content-color">
        <div className="content-con">
          <div className="text-con">
            <div className="title-con">
              <h3>A little information for our valuable guest</h3>
              <p>
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>
            <div className="fact-all">
              <div className="fact">
                <h1>3</h1>
                <h4>Locations</h4>
              </div>
              <div className="fact">
                <h1>1995</h1>
                <h4>Founded</h4>
              </div>
              <div className="fact">
                <h1>65+</h1>
                <h4>Staff Members</h4>
              </div>
              <div className="fact">
                <h1>100%</h1>
                <h4>Satisfied Customers</h4>
              </div>
            </div>
          </div>
          <img src={img2} alt="img" />
        </div>
      </section>
      <section className="test-2 testimonial">
        <div className="test">
          <div className="title-test">
            <h2>What Our Customers Say</h2>
          </div>
          <div className="card-group test-card">
            <div className="card card-2">
              <div className="card-body">
                <div className="test-text">
                  <h3>“The best restaurant”</h3>
                  <p>
                    Last night, we dined at place and were simply blown away.
                    From the moment we stepped in, we were enveloped in an
                    inviting atmosphere and greeted with warm smiles.
                  </p>
                </div>
                <div className="test-user">
                  <img src={user1} alt="img" />
                  <div className="user-text">
                    <h5>Sophire Robson</h5>
                    <p>Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-body">
                <div className="test-text">
                  <h3>“Simply delicious”</h3>
                  <p>
                    LPlace exceeded my expectations on all fronts. The ambiance
                    was cozy and relaxed, making it a perfect venue for our
                    anniversary dinner. Each dish was prepared and beautifully
                    presented.
                  </p>
                </div>
                <div className="test-user">
                  <img src={user2} alt="img" />
                  <div className="user-text">
                    <h5>Matt Cannon</h5>
                    <p>San Diego, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-body">
                <div className="test-text">
                  <h3>“One of a kind restaurant”</h3>
                  <p>
                    The culinary experience at place is first to none. The
                    atmosphere is vibrant, the food - nothing short of
                    extraordinary. The food was the highlight of our evening.
                    Highly recommended.
                  </p>
                </div>
                <div className="test-user">
                  <img src={user3} alt="img" />
                  <div className="user-text">
                    <h5>Andy Smith</h5>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
