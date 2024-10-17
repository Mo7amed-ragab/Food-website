import React from 'react';
import logo from '../img/Logo (footer).png';
import social1 from '../img/1.svg';
import social2 from '../img/2.svg';
import social3 from '../img/3.svg';
import social4 from '../img/4.svg';
import foot1 from '../img/footer(1).png';
import foot2 from '../img/footer(2).png';
import foot3 from '../img/footer(3).png';
import foot4 from '../img/footer(4).png';
import '../Css/Footer.css';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="foot-top">
            <div className="col-1">
              <img src={logo} alt="logo" />
              <p>
                In the new era of technology we look a in the future with
                certainty and pride to for our company and.
              </p>
              <div className="social-foot">
                <a href="#">
                  <img src={social1} alt="logo" />{' '}
                </a>
                <a href="#">
                  <img src={social2} alt="logo" />{' '}
                </a>
                <a href="#">
                  <img src={social3} alt="logo" />{' '}
                </a>
                <a href="#">
                  <img src={social4} alt="logo" />{' '}
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="coll-2">
                Pages
                <div className="list">
                  <a>Home</a>
                  <a>About</a>
                  <a>Menu</a>
                  <a>Pricing</a>
                  <a>Blog</a>
                  <a>Contact</a>
                  <a>Delivery</a>
                </div>
              </div>
              <div className="coll-2">
                Utility Pages
                <div className="list">
                  <a>Start Here</a>
                  <a>Styleguide</a>
                  <a>Password Protected</a>
                  <a>404 Not Found</a>
                  <a>licenses</a>
                  <a>Changelog</a>
                  <a>View More</a>
                </div>
              </div>
            </div>
            <div className="col-3">
              Follow Us On Instagram
              <div className="foot-img">
                <img src={foot1} alt="img" />
                <img src={foot2} alt="img" />
                <img src={foot3} alt="img" />
                <img src={foot4} alt="img" />
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <p>Copyright © 2024 Hashtag Developer. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
