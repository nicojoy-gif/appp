import React from 'react';
import '../assets/about.css';
import { Link } from 'react-router-dom';
import bg4 from '../assets/bg4.jpg';
import bg5 from "../assets/bg5.jpg";
import vid from '../assets/vid.mp4';
import b6 from '../assets/b6.jpg';
import b10 from "../assets/b10.jpg";
import b11 from "../assets/b11.jpg";
import b13 from "../assets/bg13.jpg";
import b14 from "../assets/b14.jpg";
import b15 from "../assets/b15.jpg";
import b16 from "../assets/b16.jpg";
import Footer from './Footer';
import Navbar from './Navbar';

function About() {
  return (
    <div className="container-fluid py-3">
      <Navbar />
      <div className="bgg position-relative">
        <img src={b15} alt="about" className="bg mx-auto d-block " />
        <h1 className="about-header text-center fw-semibold position-absolute top-50 start-50 translate-middle">
          Ableton
        </h1>
      </div>

      <section className="my-5">
        <p className="fw-semibold fs-3 m-auto para py-5">
          We make
          <Link to="/live" className="links text-danger">
            Live
          </Link>
          ,
          <Link to="/push" className="links">
            Push
          </Link>
          and
          <Link to="/link" className="links">
            Link
          </Link>
          <i class="fa-solid fa-dash"></i> unique software and hardware for
          music creation and performance. With these products, our community of
          users creates amazing things.
        </p>
        <p className="fs-5 m-auto  para pt-2 pb-5">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </section>
      <section className="container-fluid grid-box my-5 mx-0 p-0">
        <div className="row ">
          <div className="col-6 grid-two  ">
            <div className="grid-image">
              <img src={bg5} className="grid-imgs" alt="grid photography" />
            </div>
          </div>

          <div className="col-6 text-center d-flex grid-one ">
            <div className=" my-auto">
              <img src={bg4} className="grid-img" alt="grid photography" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 ">
        <p className="fw-semibold fs-3 m-auto para py-4">
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </p>
        <p className="fs-5 m-auto  para pt-2 pb-5">
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
        <div className="m-auto py-5 text-center">
          <video src={vid} class="object-fit-contain" autoplay></video>
          <p className="fs-6">Why Ableton - Juanpe Bolivar</p>
        </div>
      </section>
      <section className="my-5 ">
        <p className="fw-semibold fs-3 m-auto para py-4">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </p>
        <p className="fs-5 m-auto  para pt-2 pb-5">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </section>
      <section className="container position-relative my-5 mx-0 py-5 px-0 grids">
        <div className="row grids">
          <div className="col able-grid text-center d-flex align-items-center ">
            <div className="ableGrid-images my-3 d-flex flex-column  align-items-center justify-content-around ">
              <img src={b10} alt="music-photography" />
              <img src={b11} alt="music-photography" />
            </div>
          </div>
          <div className="col-4 grid">
            <div className="ableStudio">
              <img src={b6} alt="music-photography" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 ">
        <p className="fw-semibold fs-3 m-auto para py-4">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </p>
        <p className="fs-5 m-auto  para pt-2 pb-5">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </section>
      <section className="m-auto p-auto container ">
        <div className="images d-flex align-items-center justify-content-center">
          <img src={b13} className="img-fluid" alt="music-photography" />
        </div>
      </section>
      <section className="my-5 ">
        <p className="fw-semibold fs-3 m-auto para pt-4 pb-3">
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </p>
        <p className="fs-5 m-auto  para py-3 ">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p className="fs-5 m-auto  para pt-2 pb-5">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </section>
      <section className="container position-relative d-flex justify-content-center">
        <div className="row gridss ">
          <div className="col-md-6  able-grids position">
            <div className="ableGrid-imagess my-3 d-flex flex-column  align-items-center justify-content-around ">
              <img src={b14} alt="music-photography" />
            </div>
          </div>
          <div className=" col-md-4  grid">
            <div className="ableStudios">
              <img src={b16} alt="music-photography" />
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 ">
        <p className="fw-semibold fs-3 m-auto para py-4">
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </p>
        <p className="fs-5 m-auto  para pt-2 pb-5">
          If you're joining us in Berlin, we'll help with relocation and
          paperwork. We’ll even provide you with free German or English lessons.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it’s not all work; we
          have several company and team outings throughout the year as well as a
          variety of fun, informal small-group activities.
        </p>
      </section>
      <section className="container footer-box d-flex align-items-center justify-content-center my-5">
        <div className="row gridsOne m-0 p-0">
          <div className="col-md-6   m-0 p-0">
            <div className="gridsOne-img">
              <img src={b6} className="img-fluid" alt="music-photography" />
            </div>
          </div>
          <div className="col-md-6  gridsTwo text-start  d-flex align-items-center justify-content-center ">
            <div className="px-5 ">
              <p className="fs-4  fw-bold">
                We’re really proud of the work we’ve done so far. But there’s so
                much more to come. If you’d like to be a part of it, please join
                us.
              </p>
              <button className="btn fs-3 fw-semibold ">
                <Link to="/live" className="links">
                  See latest jobs &#62;
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-5" />
      <Footer />
    </div>
  );
}

export default About