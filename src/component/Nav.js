import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../assets/nav.css'


function Nav() {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    setToggle(!toggle);
    console.log('toggle')
  }
  return (
    <div className="container-fluid">
      <hr className="p-0 m-0" />
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fs-5 fw-semibold "
        id="navbar"
      >
        <div className="container-fluid">
          <div>
            <i className="fa-solid fa-bars rotate"></i>
            <i className="fa-solid fa-bars pad "></i>
          </div>
          <button
            className="navbar-toggler btn fw-bold fs-3 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            Menu <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-start">
              <li className="nav-item btn nav-link">
                <NavLink
                  to="/live"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Live
                </NavLink>
              </li>

              <li className="nav-item  btn nav-link">
                <NavLink
                  to="/note"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Note
                </NavLink>
              </li>
              <li className="nav-item btn  nav-link">
                <NavLink
                  to="/link"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Link
                </NavLink>
              </li>
              <li className="nav-item  btn nav-link">
                <NavLink
                  to="/buy"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li className="nav-item btn  nav-link">
                <NavLink
                  to="/help"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Help
                </NavLink>
              </li>
              <li className="nav-item btn  nav-link">
                <NavLink
                  to="/live"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-buy"
                  }
                  onClick={toggler}
                >
                  More <i className="fa-solid fa-plus"></i>
                </NavLink>
              </li>
            </ul>
            <ul className="navbar d-lg-flex flex-lg-row justify-content-end align-items-end m-0  ">
              <li className="nav-item  btn nav-link text-primary px-3">
                <NavLink
                  to="/trial"
                  className={({ isActive }) => (isActive ? "active" : "navbuy")}
                >
                  Try Live for free
                </NavLink>
              </li>
              <li className="nav-item btn  nav-link">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Login or register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="border border-dark  opacity-50 p-0 m-0" />
      {toggle && (
        <section className="px-3 py-5">
          <h3>More on Ableton.com:</h3>
          <ul className="d-flex list-unstyled fs-6 pb-3">
            <li className="pe-3">Blog</li>
            <li className="px-3">Ableton for the Classroom</li>
            <li className="px-3">Ableton for Colleges and Universities</li>
            <li className="px-3">Certified Training</li>
            <li className="px-3">About Ableton</li>
            <li className="px-3">Jobs</li>
            <li className="px-3">Apprenticeships</li>
          </ul>
          <h3 className="py-3">More from Ableton</h3>
          <div className="row ">
            <div className="col-lg-3 ">
              <h4 className="fs-4 px-2">Loop</h4>
              <p className="btn text-start">
                Watch Talks, Performances and Features from Ableton's Summit for
                Music Makers
              </p>
            </div>

            <div className="col-lg-3">
              <h4 className="fs-4 px-2">Learning Music</h4>
              <p className="btn text-start">
                Learn the fundamentals of music making right in your browser.
              </p>
            </div>
            <div className="col-lg-3">
              <h4 className="fs-4 px-2">Learning Synths</h4>
              <p className="btn text-start">
                Get started with synthesis using a web-based synth and
                accompanying lessons.
              </p>
            </div>
            <div className="col-lg-3">
              <h4 className="fs-4 ">Making Music</h4>
              <p className="btn text-start ">
                Some tips from 74 Creative Strategies for Electronic Producers.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Nav