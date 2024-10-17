import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import img1 from '../img/Logo.png';
import social1 from '../img/1.svg';
import social2 from '../img/2.svg';
import social3 from '../img/3.svg';
import social4 from '../img/4.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Header.css';
const Header = () => {
  const [active, setActive] = useState('links');
  const [toggleIcon, setToggleIcon] = useState('nav-toggler');
  const navToggle = () => {
    active === 'links' ? setActive('links nav-active') : setActive('links');
    toggleIcon === 'nav-toggler'
      ? setToggleIcon('nav-toggler toggle')
      : setToggleIcon('nav-toggler');
  };
  return (
    <>
      <header>
        <div className="topbar">
          <div className="info-topbar">
            <div className="call">
              <FontAwesomeIcon className="fa" icon={faPhone} />
              <a href="tel:4148570107">(414) 857 - 0107</a>
            </div>
            <div className="e-mail">
              <FontAwesomeIcon className="fa" icon={faEnvelope} />
              <a href="mailto: yummy@bistrobliss">yummy@bistrobliss</a>
            </div>
          </div>
          <div className="social-topbar">
            <Link to="#">
              <img src={social1} alt="logo" />
            </Link>
            <Link to="#">
              <img src={social2} alt="logo" />
            </Link>
            <Link to="#">
              <img src={social3} alt="logo" />
            </Link>
            <Link to="#">
              <img src={social4} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="navbar">
          <div className="logo">
            <NavLink to="/">
              <img src={img1} alt="logo" />
            </NavLink>
          </div>
          <nav className={active}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/pages">Pages</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="nav-btn">
            <NavLink to="/pages">Book A Table</NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
