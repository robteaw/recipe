import React, { useState } from "react";
import "Navbar.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons";

export default function Navbar() {
  const [click, setClick] = useState(false);

  // close nav menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="container">
      <Link to="/">
        <img src="" alt="" className="logo" onClick={closeMobileMenu} />
      </Link>
      <div className={click ? "menu active" : "menu"}>
        <Link to="/" className="nav-item">
          Cuisine
        </Link>
        <Link to="/" className="nav-item">
          Dessert
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}
