import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const navitem = (
    <>
      <li><Link>Home</Link></li>
      <li><Link>About</Link></li>
      <li><Link>Schedules</Link></li>
      <li><Link>Membership</Link></li>
      <li><Link>Pricing</Link></li>

    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navitem}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navitem}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <p1>Offers</p1>
      <button className="navButton">
        Course
      </button>
      </div>
    </div>
  );
};

export default Navbar;
