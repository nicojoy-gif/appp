import React from 'react'
import { NavLink } from 'react-router-dom';
import '../assets/nav.css'
function Navbar() {
  return (
    <div className="container m-0 pb-3">
      <nav
        className=" container-fluid navbar navbar-expand-sm bg-body-tertiary fs-6 fw-semibold"
        id="navbar"
      >
        <ul className="navbar  mb-2  px-2">
          <li className="nav-item text-danger px-2 btn nav-link">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item btn px-2 nav-link">
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Jobs
            </NavLink>
          </li>
          <li className="nav-item btn px-2 nav-link">
            <NavLink
              to="/appre"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Apprenticeships
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar