import React from 'react'
import '../assets/live.css'
import Livenav from './Livenav';
import g1 from '../assets/g1.avif'
import g2 from "../assets/g2.avif";
import g3 from "../assets/g3.avif";
import g4 from "../assets/g4.avif";
import g5 from "../assets/g5.avif";
import { Link } from 'react-router-dom';


function Hardware() {
  return (
    <>
      <Livenav />
      <div className="container">
        <header className="pt-5">
          <h1 className="pt-4">
            Push integrates seamlessly with Live. But it isn’t the only way to
            get hands-on with your music. Live-integrated hardware from our
            partners comes pre-mapped so you stay focused on your creative flow,
            not on configuring your setup.
          </h1>
          <p>
            <Link to="/push" className="text-decoration-none">
              Learn more about Push &#62;
            </Link>
          </p>
        </header>
        <h2 className="py-3">Featured hardware</h2>
        <div className="row m-0 p-0">
          <div className="col-md-3 m-0 p-0">
            <figure>
              <img src={g1} alt="keyboard" />
              <figcaption>Roland</figcaption>
              <h5>Fantom-0 Series</h5>
              <p>
                <Link
                  to="https://www.roland.com/uk/promos/fantom-0_series/"
                  className="text-decoration-none"
                >
                  Learn more &#62;
                </Link>
              </p>
            </figure>
          </div>
          <div className="col-md-3 m-0 p-0">
            <figure>
              <img src={g2} alt="keyboard" />
              <figcaption>Novation</figcaption>
              <h5>Launchpad Pro MK3</h5>
              <p>
                <Link
                  to="https://www.roland.com/uk/promos/fantom-0_series/"
                  className="text-decoration-none"
                >
                  Learn more &#62;
                </Link>
              </p>
            </figure>
          </div>
          <div className="col-md-3 m-0 p-0">
            <figure>
              <img src={g3} alt="keyboard" />
              <figcaption>Novation</figcaption>
              <h5>Launchkey Series MK3</h5>
              <p>
                <Link
                  to="https://www.roland.com/uk/promos/fantom-0_series/"
                  className="text-decoration-none"
                >
                  Learn more &#62;
                </Link>
              </p>
            </figure>
          </div>
          <div className="col-md-3 m-0 p-0">
            <figure>
              <img src={g4} alt="keyboard" />
              <figcaption>AKAI</figcaption>
              <h5>APC 40 MKII</h5>
              <p>
                <Link
                  to="https://www.roland.com/uk/promos/fantom-0_series/"
                  className="text-decoration-none"
                >
                  Learn more &#62;
                </Link>
              </p>
            </figure>
          </div>
          <div className="col-md-3 m-0 p-0">
            <figure>
              <img src={g5} alt="keyboard" />
              <figcaption>Roland</figcaption>
              <h5>FANTOM Series</h5>
              <p>
                <Link
                  to="https://www.roland.com/uk/promos/fantom-0_series/"
                  className="text-decoration-none"
                >
                  Learn more &#62;
                </Link>
              </p>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hardware