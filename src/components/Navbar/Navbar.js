import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);

  // close nav menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="container">
      <Link to="/">
        <h3>Simple Recipes</h3>
        <img src="" alt="" className="logo" onClick={closeMobileMenu} />
      </Link>
      <div className={click ? "menu active" : "menu"}>
        <Link to="/" className="nav-item">
          Appetizer
        </Link>
        <Link to="/" className="nav-item">
          Cuisine
        </Link>
        <Link to="/" className="nav-item">
          Dessert
        </Link>
        <Link to="/" className="nav-item">
          Salad
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}
