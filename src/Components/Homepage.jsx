import React from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import menu1 from '../img/menu(1).png';
import menu2 from '../img/menu(2).svg';
import menu3 from '../img/menu(3).svg';
import menu4 from '../img/menu(4).svg';
import img1 from '../img/image 1100.png';
import img2 from '../img/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png';
import img3 from '../img/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png';
import img4 from '../img/sadj-iron-pot-with-various-salads 1.png';
import icon1 from '../img/Icon (1).png';
import icon2 from '../img/Icon.png';
import icon3 from '../img/Icon (2).png';
import user1 from '../img/Ellipse 19.png';
import user2 from '../img/Image.png';
import user3 from '../img/Image (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../Css/Homepage.css';
const Homepage = () => {
  return (
    <>
      <section className="banner">
        <div className="text-ban">
          <h1>
            Best food for
            <br></br>your taste
          </h1>
          <p>
            Discover delectable cuisine and unforgettable moments<br></br> in
            our welcoming, culinary haven.
          </p>
          <div className="butt-ban">
            <div className="btn-ban">
              <NavLink to="/pages">Book A Table</NavLink>
            </div>
            <div className="nav-btn">
              <NavLink to="/menu">Explore Menu</NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="menu-content">
          <h2>Browse Our Menu</h2>
          <div className="card-group title-card">
            <div className="card">
              <div className="card-body">
                <img src={menu1} alt="logo" />
                <h3>Breakfast</h3>
                <p>
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <NavLink to="/menu">Explore Menu</NavLink>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={menu2} alt="logo" />
                <h3>Main Dishes</h3>
                <p>
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <NavLink to="/menu">Explore Menu</NavLink>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={menu3} alt="logo" />
                <h3>Drinks</h3>
                <p>
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <NavLink to="/menu">Explore Menu</NavLink>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={menu4} alt="logo" />
                <h3>Desserts</h3>
                <p>
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <NavLink to="/menu">Explore Menu</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      <Link href="#" className="loc">
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
              <div className="nav-btn">
                <NavLink to="/about">More About Us</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="content-cont">
          <div className="content-img">
            <img className="img-1" src={img2} alt="img" />
            <img className="img-2" src={img3} alt="img" />
            <img className="img-3" src={img4} alt="img" />
          </div>
          <div className="content-text">
            <div className="text-title">
              <h2>Fastest Food Delivery in City</h2>
              <p>
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.{' '}
              </p>
            </div>
            <div className="text-feat">
              <div className="row-1">
                <img src={icon1} alt="icon" />
                <h6>Delivery within 30 minutes</h6>
              </div>
              <div className="row-2">
                <img src={icon2} alt="icon" />
                <h6>Best Offer & Prices</h6>
              </div>
              <div className="row-3">
                <img src={icon3} alt="icon" />
                <h6>Online Services Available</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="test">
          <div className="title-test">
            <h2>What Our Customers Say</h2>
          </div>
          <div className="card-group test-card">
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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

export default Homepage;
