import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

const NavMenu = () => (
  <>
    <li>
      <Link to="/about">Home</Link>
    </li>
    <li>
      <Link to="/services">About</Link>
    </li>
    <li>
      <Link to="/contact">Services</Link>
    </li>
    <li>
      <Link to="/contact">Membership</Link>
    </li>
    <li>
      <Link to="/contact">Pricing</Link>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="container">
      <div className="navMain">
      <div className="nav-menu">
        {toggleMenu ? (
          <RiCloseLine onClick={() => setToggleMenu(false)} />
        ) : (
          <FaBars onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="nav-menu-wrapper">
            <div className="nav-menu-wrapper">
              <NavMenu />
            </div>
          </div>
        )}
      </div>
      <div>
        <ul className="navUl">
          <NavMenu />
        </ul>
      </div>
      <div className="navButtonMain">
        <p>Offers</p>
       <div>
       <button className="navButton">Course</button>
       </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
