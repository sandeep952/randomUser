import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <span className="navbar-brand">Random user</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className='nav-item'>
            <NavLink className='nav-link' exact to="/">Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link'  to="/completeids">Complete ids</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link'  to="/incompleteids">InComplete ids</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
