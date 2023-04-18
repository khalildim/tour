import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setclicked] = useState(false);
  const handelClick = () => {
    setclicked(!clicked);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons">
        <i
          onClick={handelClick}
          className={clicked ? "fas fa-bars" : "fas fa-times"}
        ></i>
      </div>
      <ul className={clicked ? "nav-menu" : "nav-menu active"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                <i class={item.icon}></i>
                {item.titel}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
