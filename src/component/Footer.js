import React from 'react';
import '../assets/about.css';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="container">
      <section className="my-5">
        <h1 className="fw-bold fs-2 py-5">Ableton</h1>
        <div className="row my-3">
          <div className="col-lg-4 d-flex flex-column align-items-start py-3 justify-content-start">
            <button className="btn fs-6 fw-semibold ">
              <Link to="/live" className="links text-dark">
                Register Live or Push &#62;
              </Link>
            </button>
            <button className="btn fs-6 fw-semibold ">
              <Link to="/About" className="links text-dark">
                About Ableton &#62;
              </Link>
            </button>
            <button className="btn fs-6 fw-semibold ">
              <Link to="/jobs" className="links text-dark">
                Jobs &#62;
              </Link>
            </button>
            <div className="mx-2">
              <i className="fa-brands fa-square-facebook fb fs-2 mx-1"></i>
              <i className="fa-brands fa-square-twitter tweet fs-2 mx-1"></i>
              <i className="fa-brands fa-square-youtube tube fs-2 mx-1"></i>
              <i className="fa-brands fa-square-instagram insta fs-2 mx-1"></i>
            </div>
          </div>
          <div className="col-lg-4 py-2 d-flex flex-column align-items-start justify-content-start py-2">
            <p className="fw-bold my-0 btn fs-6">Education</p>
            <button className="btn fs-6  fw-semibold ">
              <Link to="/" className="links text-dark">
                Offers for students and teachers &#62;
              </Link>
            </button>
            <button className="btn fs-6  fw-semibold">
              <Link to="/" className="links text-dark">
                Ableton for the Classroom &#62;
              </Link>
            </button>
            <button className="btn fs-6  fw-semibold">
              <Link to="/" className="links text-dark">
                Ableton for Colleges and Universities &#62;
              </Link>
            </button>
          </div>
          <div className="col-lg-4 d-none  d-md-block d-flex flex-column align-items-start justify-content-start">
            <p className="fs-6 fw-bold">Sign up to our newsletter</p>
            <p>
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>
            <form className="d-flex" role="search">
              <input
                className="form-control  bg-light rounded-0"
                type="search"
                placeholder="  Email Address"
                aria-label="Search"
              />
              <button
                className="btn btn-sm btn-primary rounded-0"
                type="submit"
              >
                SignUp
              </button>
            </form>
          </div>
          <div className="row my-2">
            <div className="col-lg-4 d-flex py-2 flex-column align-items-start justify-content-start">
              <p className="fw-bold my-0 btn fs-6">Community</p>
              <button className="btn fs-6 fw-semibold ">
                <Link to="/live" className="links text-dark">
                  Find Ableton User Groups &#62;
                </Link>
              </button>
              <button className="btn fs-6 fw-semibold ">
                <Link to="/About" className="links text-dark">
                  Find Certified Training &#62;
                </Link>
              </button>
              <button className="btn fs-6 fw-semibold ">
                <Link to="/jobs" className="links text-dark">
                  Become a Certified Trainer &#62;
                </Link>
              </button>
            </div>
            <div className="col-lg-4 d-flex py-2 flex-column align-items-start justify-content-start">
              <p className="fw-bold my-0 btn fs-6">Distributors</p>
              <button className="btn fs-6  fw-semibold ">
                <Link to="/" className="links text-dark">
                  Find Distributors &#62;
                </Link>
              </button>
              <button className="btn fs-6  fw-semibold">
                <Link to="/" className="links text-dark">
                  Try Push in-store &#62;
                </Link>
              </button>
            </div>
            <div className="col-lg-4 d-flex py-2 flex-column align-items-start justify-content-start">
              <p className="fw-bold my-0 btn fs-6">Language and Location</p>
              <div className="d-flex">
                <select
                  className="form-select mx-2 bg-light rounded-0"
                  aria-label="Default select example"
                >
                  <option selected>English</option>
                  <option value="1">Deutsh</option>
                  <option value="2">Francias</option>
                  <option value="3">Spanish</option>
                </select>

                <select
                  className="form-select  bg-light rounded-0"
                  aria-label="Default select example"
                >
                  <option selected>Nigeria</option>
                  <option value="1">Spain</option>
                  <option value="2">USA</option>
                  <option value="3">London</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <nav className="navbar navbar-expand-lg bg-body-tertiary my-5 p-0">
          <div className="d-md-flex align-items-center justify-content-between">
            <ul className="navbar-nav  mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink to="/contact" className="text-secondary nav-link">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" href="#">
                  Press Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Legal Info
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Cookie Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="#">
                  Imprint
                </NavLink>
              </li>
            </ul>
            <div className='d-md-flex align-items-center'>
            <li className="nav-item navbar-nav ">
              <NavLink className="nav-link" href="#">
                Made in Berlin
              </NavLink>
            </li>
            <div>
              <i className="fa-solid fa-bars rotate"></i>
              <i className="fa-solid fa-bars pad "></i>
            </div>
</div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer