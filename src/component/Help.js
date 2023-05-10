import React from "react";
import { Link, NavLink } from "react-router-dom";
import d1 from '../assets/d1.jpg';
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpg";
import d5 from "../assets/d5.jpg";
import '../assets/help.css';
import Footer from './Footer'
function Help() {
  return (
    <div className="pb-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2  fs-6 fw-semibold" id="navbar">
        <ul className="navbar me-auto mb-2 mb-lg-0 px-2">
          <li className="nav-item text-danger px-2 btn nav-link">
            <NavLink
              to="/help"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Overview
            </NavLink>
          </li>
          <li className="nav-item px-2 btn nav-link">
            <NavLink
              to="/learn"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Learn Live
            </NavLink>
          </li>
          
        </ul>
      </nav>
      <div className="container m-auto">
        <div className="row ">
          <h1 className="pt-5 help-header fw-bold">Need help?</h1>
          <div className="col-lg-6 p-5 ">
            <p className="pb-3 pt-5 fw-bold fs-4">Knowledge Base</p>
            <p>
              Find help articles on all of our products plus support for your
              shopping and product licence questions.
            </p>
            <Link to="https://help.ableton.com/hc/en-us" className="px-0">
              <button className="btn text-primary px-0">
                Go to the Knowledge Base &#62;
              </button>
            </Link>
            <p className="fs-4 fw-bold">Search the Knowledge Base:</p>
            <form className="d-flex" role="search">
              <input
                className="form-control  bg-light rounded-0"
                type="search"
                placeholder="Keyword, e.g. installation"
                aria-label="Search"
              />
              <button
                className="btn btn-sm btn-primary fs-5 px-3 rounded-0"
                type="submit"
              >
                Search
              </button>
            </form>

            <div className="my-5 help-img">
              <img src={d1} alt='music-photography' />
              <h3 className="py-3">Learn Live</h3>
              <p>
                Video tutorials from getting started through to mastering the
                latest features, plus further training options.
              </p>
              <Link to="/">
                <button className="btn text-primary mb-5 px-0">
                  Watch Learn Live video series &#62;
                </button>
              </Link>
            </div>
            <div className="my-5 help-img">
              <img src={d3} alt='music-photography' />
              <h3 className="py-3">Learning Music</h3>
              <p>
                Learn the fundamentals of music making – beats, melodies,
                harmonies, basslines, and song structure – and make music right
                in your browser.
              </p>
              <Link to="/">
                <button className="btn text-primary px-0">
                  Get started making music &#62;
                </button>
              </Link>
            </div>
            <div className="my-5 help-img">
              <img src={d2} alt='music-photography' />
              <h3 className="py-3">Making Music</h3>
              <p>
                Some tips from 74 Creative Strategies for Electronic Producers –
                Dennis DeSantis’ book on solving musical problems, making
                progress
                and finishing what you start.{" "}
              </p>
              <Link to="/">
                <button className="btn text-primary px-0">
                  check out chapters from the book &#62;
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 p-5 ">
            <p className="pb-3 pt-5 fw-bold fs-4">Suggested Articles</p>
            <ul className="list-unstyled p-0 m-0">
              <li className="p-0 m-0">
                <Link to="https://help.ableton.com/hc/en-us/articles/360019140859">
                  <button className="btn text-primary p-0">
                    Live 11 Technical FAQ
                  </button>
                </Link>
              </li>
              <li className="p-0 m-0">
                <Link to="https://help.ableton.com/hc/en-us/articles/115001261150">
                  <button className="btn text-primary p-0">
                    Mac Compatibility
                  </button>
                </Link>
              </li>
              <li className="px-0 mx-0">
                <Link to="https://help.ableton.com/hc/en-us/articles/209775965">
                  <button className="btn text-primary p-0">
                    Windows Compatibility
                  </button>
                </Link>
              </li>
              <li className="px-0 mx-0">
                <Link to="https://help.ableton.com/hc/en-us/articles/209773565">
                  <button className="btn text-primary p-0">
                    installing Live
                  </button>
                </Link>
              </li>
              <li className="px-0 mx-0">
                <Link to="https://help.ableton.com/hc/en-us/articles/209773585">
                  <button className="btn text-primary p-0">
                    Authorizing Live
                  </button>
                </Link>
              </li>
              <li className="px-0 mx-0">
                <Link to="https://help.ableton.com/hc/en-us/articles/209072549-Using-Push-2-FAQ">
                  <button className="btn text-primary p-0">
                    Using Push 2 FAQ
                  </button>
                </Link>
              </li>
              <li className="px-0 mx-0">
                <Link to="https://help.ableton.com/hc/en-us/articles/6240279343772-Note-FAQ">
                  <button className="btn text-primary p-0">Note FAQ</button>
                </Link>
              </li>
            </ul>
            <div className="my-5 help-img">
              <img src={d5} alt='music-photography' />
              <h3 className="py-3">Learn Push</h3>
              <p>
                From setup to sound design and beyond – our growing collection
                of tutorials shows how you can make music with Push.{" "}
              </p>
              <Link to="/">
                <button className="btn text-primary px-0">
                  Watch Learn Push 2 series &#62;
                </button>
              </Link>
            </div>
            <div className="my-5 help-img">
              <img src={d4} alt='music-photography' />
              <h3 className="py-3">Learning Synths</h3>
              <p>
                Learn the fundamentals of synthesis at your own pace with a
                powerful but easy-to-learn synthesizer that runs in your web
                browser.{" "}
              </p>
              <Link to="/">
                <button className="btn text-primary px-0">
                  Get started making sounds &#62;
                </button>
              </Link>
            </div>
          </div>
        </div>
        <section>
          <h2 className="pt-5 pb-0">More learning resources</h2>
          <div className="row">
            <div className="col-lg-6 px-5">
              <div className="my-4">
                <h3 className="py-3">Live & Push manual</h3>
                <p className="py-3">
                  Everything you need to know about Live and Push.
                </p>
                <Link to="/https://www.ableton.com/en/manual/welcome-to-live/">
                  <button className="btn px-0 text-primary">
                    Check out the manual &#62;
                  </button>
                </Link>
              </div>

              <div className="my-4">
                <h3 className="py-3">Certified Training</h3>
                <p className="py-3">
                  All over the globe, a growing group of trainers and
                  institutions are offering approved Ableton teaching at all
                  skill levels, both for individuals and groups.{" "}
                </p>
                <p className="bg-primary p-3 ">
                  Training in Palermo:
                  <Link to="https://www.ableton.com/en/certified-training/70/#?item_type=all&country=country_it&state_city=state_city_palermo">
                    <button className="btn px-0">
                      1 trainers and institutions offer certified training in
                      Palermo &#62;
                    </button>
                  </Link>
                </p>
                <Link to="https://www.ableton.com/en/certified-training/#?item_type=all&country=country_ng">
                  <button className="btn px-0 text-primary">
                    Not based in Palermo? Find training near you &#62;
                  </button>
                </Link>
              </div>
              <div className="my-4">
                <h3 className="py-3">User Groups</h3>
                <p className="py-3">
                  For beginners and seasoned users alike, Ableton User Groups
                  are open to any Live user who wants to share their knowledge
                  and learn from others in person.{" "}
                </p>
                <Link to="/https://www.ableton.com/en/manual/welcome-to-live/">
                  <button className="btn px-0 text-primary">
                    Find a User Group near you &#62;
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 px-5">
              <div className="my-4">
                <h3 className="py-3">Learn Note</h3>
                <p className="py-3">
                  Find out how to play beats and melodies, sample your
                  surroundings, and experiment with song structures in Note – an
                  iOS app for musical sketching. Then send your Note sketches to
                  Live using Ableton Cloud.{" "}
                </p>
                <Link to="/https://www.ableton.com/en/manual/welcome-to-live/">
                  <button className="btn px-0 text-primary">
                    Find a User Group near you &#62;
                  </button>
                </Link>
                <Link to="https://www.ableton.com/en/blog/learn-to-sketch-with-sound-in-note/">
                  <button className="btn px-0 text-primary">
                    Watch a tutorial &#62;
                  </button>
                </Link>
              </div>
              <div className="my-4">
                <h3 className="py-3">Learn finger drumming</h3>
                <p className="py-3">
                  Practice your finger drumming skills with Melodics, a
                  standalone app that offers a great way to learn and refine
                  your playing. It’s free to download and comes with 20 lessons
                  to get you started.
                </p>
                <Link to="https://melodics.com/">
                  <button className="btn px-0 text-primary">
                    Download Melodics for free &#62;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 >Contact Support</h2>
          <div className="row ">
            <div className="col-lg-6 px-5">
              <div className="my-4">
                <h3 className="py-3">Sales support</h3>
                <p className="py-3">
                  Get in touch with us if you’ve got some questions before you
                  buy a product, or if you need help with your order, license or
                  the authorisation process.
                </p>
                <Link to="https://help.ableton.com/hc/en-us/requests/new?ticket_form_id=123205">
                  <button className="btn px-0 text-primary">
                    Submit your sales questions &#62;
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 px-5">
              <div className="my-4">
                <h3 className="py-3">Technical support</h3>
                <p className="py-3">
                  Need help with setting up or other technical issues?
                </p>
                <Link to="/login">
                  <button className="btn px-0 text-primary">
                    Please log in &#62;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Help
