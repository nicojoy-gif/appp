import React from 'react'
import { NavLink  } from 'react-router-dom';
import '../assets/live.css';

function Livenav() {
  return (
    <nav className="navbar navbar-expand-lg mt-2 fw-semibold bg-body-tertiary" id='navbar'>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <NavLink to="/live" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                Live 11
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/feature" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                All new features
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/what" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                What is Live?
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/max" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                Max for Live?
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/learn" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                Learn Live?
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/hardware" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                Integrated hardware
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink to="/compare" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                Compare editions
              </NavLink>
            </li>
            <li className="nav-item  px-2 ">
              <NavLink to="/buy" className={({ isActive }) => (isActive ? "active" : "navbuy")}>
                Buy now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Livenav