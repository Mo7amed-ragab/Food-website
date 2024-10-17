import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Data from './Datamenu.jsx';
// import brand1 from "../img/1.png";
// import brand2 from "../img/2.png";
// import brand3 from "../img/3.png";
// import brand4 from "../img/1 (1).png";
// import brand5 from "../img/2 (1).png";
// import brand6 from "../img/3 (1).png";
import brand7 from '../img/looogo.png';
// import brand8 from "../img/2 (2).png";
// import brand9 from "../img/3 (2).png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Menu.css';
const Menu = () => {
  const [items, setItems] = useState(Data);
  const filterItems = (catItem) => {
    const updateItems = Data.filter((curItem) => {
      return curItem.category === catItem;
    });
    setItems(updateItems);
  };
  return (
    <>
      <section className="menu-menu">
        <div className="title-menu">
          <h1>Our Menu</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
          <div id="item-menu" className="book-btn">
            <NavLink
              onClick={() => setItems(Data)}
              className="links-active"
              to="#item-menu"
            >
              All
            </NavLink>
            <NavLink onClick={() => filterItems('Breakfast')} to="#item-menu">
              Breakfast
            </NavLink>
            <NavLink onClick={() => filterItems('Main Dishes')} to="#item-menu">
              Main Dishes
            </NavLink>
            <NavLink onClick={() => filterItems('Drinks')} to="#item-menu">
              Drinks
            </NavLink>
            <NavLink onClick={() => filterItems('Desserts')} to="#item-menu">
              Desserts
            </NavLink>
          </div>
        </div>
        <div className="book-card">
          {items.map((val) => (
            <div className="caard">
              <img src={val.image} alt="img" />
              <div className="card-card">
                <h2>$ {val.price}</h2>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="brands">
        <div className="content-brand">
          <div className="text-brand">
            <h1>You can order through apps</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
          <div className="logo-brand">
            {/* <div className="row">
              <img src={brand1} alt="brand" />
              <img src={brand2} alt="brand" />
              <img src={brand3} alt="brand" />
            </div>
            <div className="row">
              <img src={brand4} alt="brand" />
              <img src={brand5} alt="brand" />
              <img src={brand6} alt="brand" />
            </div> */}
            <div className="row">
              <img src={brand7} alt="brand" />
              {/* <img src={brand8} alt="brand" />
              <img src={brand9} alt="brand" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
