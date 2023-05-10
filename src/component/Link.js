import React from 'react';
import '../assets/link.css';
import h1 from '../assets/h1.jpg'
import h2 from '../assets/h2.jpg'
import h5 from '../assets/h5.avif'
import n2 from '../assets/n2.jpg';
import h6 from '../assets/h6.avif';
import w1 from "../assets/w1.avif";
import w2 from "../assets/w2.avif";
import w3 from "../assets/w3.avif";
import w4 from "../assets/w4.avif";
import w5 from "../assets/w5.avif";
import w6 from "../assets/w6.avif";
import w7 from "../assets/w7.avif";
import w8 from "../assets/w8.avif";
import w9 from "../assets/w9.avif";
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
function Link() {
  return (
    <div>
      <nav
        className="navbar navbar-expand ms-3 bg-body-tertiary  fw-semibold "
        id="navbar"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item btn fs-6 nav-link">
            <NavLink
              to="/link"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              What is Link?
            </NavLink>
          </li>
          
        </ul>
      </nav>
      <header className="link-header position-relative">
        <img src={n2} alt="sound-play" />
        <h1 className="p-5 text-white position-absolute top-50   translate-middle">
          Link
          <br />
          <span className="text-info">Play Together</span>{" "}
        </h1>
      </header>
      <section className='p-0 m-0'>
        <div className="row p-0 m-0 ">
          <div className="col-lg-6 py-5 link-colone  fs-4 fw-semibold px-5 bg-white">
            <p className="px-5 py-3">
              With acoustic instruments, playing in time comes naturally. You
              can jump in when the time’s right, and everyone keeps their flow.
              Playing together with electronic instruments hasn’t always been so
              easy. Now Link makes it effortless.
            </p>
            <p className="px-5 py-3">
              Link is a technology that keeps devices in time over a local
              network, so you can forget the hassle of setting up and focus on
              playing music. Link is now part of Live, and also comes as a
              built-in feature of other software and hardware for music making.
            </p>
          </div>
          <div className="col-lg-6 px-0 mx-0 d-flex flex-column justify-content-center  link-col position-relative">
            <figure>
              <img src={h1} alt="sounds-photography" />
            </figure>
            <figcaption>Learn how links work</figcaption>
            <button className="text-primary btn  fs-1 position-absolute top-50 start-50 translate-middle">
              <i className="fa-solid fa-circle-play"></i>
            </button>
          </div>
        </div>
      </section>
      <section className="p-0 m-0">
        <div className="row p-0 m-0">
          <div className="col-lg-6 d-flex flex-column justify-content-center coltwo m-0 p-0">
            <img src={h2} alt="sounds-photography" />
          </div>
          <div className="col-lg-6 py-5 text-white  coldark d-flex flex-column justify-content-center align-items-center">
            <div className="colpara">
              <h3 className="py-3">Join the season</h3>
              <p>
                Hop on to the same network and jam with others using multiple
                devices running Link-enabled software. While others play, anyone
                can start and stop their part; or start and stop multiple
                Link-running applications at the same time. And anyone can
                adjust the tempo and the rest will follow. No MIDI cables, no
                installation, just free-flowing sync that works.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row p-0 m-0">
          <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
            <div className="colpara py-5 ">
              <h3 className="py-3">With Live and beyond</h3>
              <p>
                People make music using a range of instruments, so Link helps
                you play together using a range of devices. A growing number of
                music applications have Link built in, which means anyone on the
                same network can play them in time with Live. You can even use
                Link without Live in your setup: play Link-enabled software in
                time using multiple devices, or multiple applications on the
                same device.
              </p>
            </div>
          </div>
          <div className="col-lg-7 colthree p-0 m-0 position-relative">
            <figure>
              <img src={h6} className="p-0 m-0" alt="sounds-photography" />
            </figure>
            <figcaption className="p-0 m-0 float-end">
              Brings app into your studio
            </figcaption>
            <button className="text-primary btn  fs-1 position-absolute top-50 start-50 translate-middle">
              <i className="fa-solid fa-circle-play"></i>
            </button>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="row p-0 m-0">
          <div className="col-lg-8 p-0 m-0">
            <div className="row colfour">
              <div className="col-3 p-0">
                <img src={w1} alt="sound photography" />
              </div>
              <div className="col-3 p-0">
                <img src={w2} alt="sound photography" />
              </div>
              <div className="col-3 p-0">
                <img src={w3} alt="sound photography" />
              </div>
            </div>
            <div className="row colfour">
              <div className="col-3 p-0">
                <img src={w4} alt="sound photography" />
              </div>
              <div className="col-3 p-0">
                <img src={w5} alt="sound photography" />
              </div>
              <div className="col-3 p-0">
                <img src={w6} alt="sound photography" />
              </div>
            </div>
            <div className="row colfour">
              <div className="col-3 p-0">
                <img src={w7} alt="sound photography" />
              </div>
              <div className="col-3 p-0">
                <img src={w8} alt="sound photography" />
              </div>
              <div className="col-3 p-0">
                <img src={w9} alt="sound photography" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-center align -items-center p-0 m-0">
            <div className="d-flex flex-column justify-content-center align -items-center">
              <h3 className="">Connect with more</h3>
              <p>
                Link works with a growing number of iOS apps and desktop
                software, with or without Live.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row p-0 m-0">
          <div className="col-purp col-lg-6 m-0 p-0  d-flex flex-column align-items-center justify-content-center">
            <div className="colpar">
              <h4 className="py-2">Build Link into your application</h4>
              <p className="py-2">
                Explore new possibilities in your own software – add Link
                support.
              </p>
              <button className="btn px-0 mx-0 py-2 text-primary">
                Check out our info for developers &#62;
              </button>
              <p className="fw-semibold pt-4">Subscribe to the newsletter</p>
              <p className="py-2">
                Sign up for the Link developer newsletter to receive all the
                latest Link news.
              </p>
              <input
                type="email"
                className="form-control py-2 my-2 rounded-0"
                id="exampleFormControlInput1"
                placeholder="Email Address"
              />

              <button className="btn btn-primary my-2 rounded-0 text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className=" col-lg-6 colthre position-relative p-0 m-0 d-flex align-items-center">
            <img src={h5} alt="photography" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Link