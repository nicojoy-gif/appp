import React, { useState } from 'react'
import '../assets/live.css'
import { Link, NavLink } from 'react-router-dom';
function Buy() {
  const [toggle, setToggle] = useState(false);
  const [togg, setTogg] = useState(false);
  const [toggles, setToggles] = useState(false)
  
  const toggler = (value) => {
    setToggle(!toggle)
  }
  const toggs = () => {
    setTogg(!togg)
  }
  
  const toggled = () => {
    setToggles(false);
  };
  const toggledd = () => {
    setToggles(true);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg mt-3 fw-semibold bg-body-tertiary"
        id="navbar"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <NavLink
                  to="/buy"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Overview
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  to="/live"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Live
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink
                  to="https://www.ableton.com/en/shop/#making-music"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Educational offers
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  to="https://www.ableton.com/en/shop/#max-for-live"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Max for Live
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  to="https://www.ableton.com/en/shop/#making-music"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Making Music
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink
                  to="https://www.ableton.com/en/shop/merchandise/"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Merchandise
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h1 className="pb-5">Live</h1>
          </div>
          <div className="col-md-9 px-5">
            <p className="fs-5 fw-semibold text-center border border-light p-3 border-3">
              Already own Live?{" "}
              <Link to="/login" className="text-decoration-none">
                Log in to see your upgrade prices &#62;{" "}
              </Link>
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3 my-2 ">
            <p className="fw-semibold fs-4">
              Live comes in three editions: Intro, Standard and Suite. They
              share common features, but Standard and Suite have additional
              features, instruments, Packs, and effects.
            </p>
          </div>
          <div className="col-md-3 my-2">
            <div className="p-3 d-flex bg-success flex-column justify-content-between">
              <div className="">
                <h3>Live 11</h3>
                <h3 className="pb-2">Intro</h3>
                <p>Essentials at a great price</p>
              </div>
              <div className="d-flex flex-column justify-content-end mt-5">
                <p className="fw-bold fs-5">USD 99</p>
                <button className="btn btn-primary px-5 rounded-0 fs-5 fw-semibold">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 ">
            <div className="p-3 d-flex bg-info flex-column justify-content-between">
              <div className="">
                <h3>Live 11</h3>
                <h3 className="pb-2">Standard</h3>
                <p>Full features plus extras</p>
              </div>
              <div className="d-flex flex-column justify-content-end mt-5">
                <p className="fw-bold fs-5">USD 449</p>
                <button className="btn btn-primary px-5 rounded-0 fs-5 fw-semibold">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-2 text-white">
            <div className="p-3 d-flex bg-dark flex-column justify-content-between">
              <div className="">
                <h3>Live 11</h3>
                <h3 className="pb-2">Suite</h3>
                <p>Complete integrated studio</p>
              </div>
              <div className="d-flex flex-column justify-content-end mt-5">
                <p className="fw-bold fs-5">USD 499</p>
                <button className="btn btn-primary px-5 rounded-0 fs-5 fw-semibold">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <button className="btn border-0 py-0 my-0" onClick={toggler}>
              <i className="fa-solid fa-plus m-0 p-0 d-flex"></i>
            </button>
            <p className="pt-3">Live Key Features</p>
          </div>
          <div className="col-3 fw-semibold fs-5">
            <p className="pt-3">Essential at great price</p>
          </div>
          <div className="col-3 fw-semibold fs-5">
            <p className="pt-3">Full features plus extras</p>
          </div>
          <div className="col-3 fw-semibold fs-5">
            <p className="pt-3">Complete integrated studio</p>
          </div>
        </div>
        {toggle && (
          <section>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>16 audio and MIDI tracks</li>
                  <li>16 scences</li>
                  <li>2 send and return tracks</li>
                  <li>8 mono audio input channels</li>
                  <li>8 mono audio output channels</li>
                  <li>Capture MIDI</li>
                  <li>Complex wrap modes</li>
                  <li className="bg-success my-3 px-3">New in Live 11</li>
                  <li>Comping</li>
                  <li>MIDI Polyphonic Expression</li>
                  <li>Tempo Following</li>
                  <li>Note and Velocity Chance</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>Unlimited audio and MIDI tracks</li>
                  <li>Unlimited scences</li>
                  <li>12 send and return tracks</li>
                  <li>256 mono audio input channels</li>
                  <li>256 mono audio output channels</li>
                  <li>Capture MIDI</li>
                  <li>Complex wrap modes</li>
                  <li>Audio-slicing</li>
                  <li>Audio to MIDI</li>
                  <li className="bg-success my-3 px-3">New in Live 11</li>
                  <li>Comping</li>
                  <li>Linked-track-editing</li>
                  <li>MIDI Polyphonic Expression</li>
                  <li>Tempo Following</li>
                  <li>Note and Velocity Chance</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>Unlimited audio and MIDI tracks</li>
                  <li>Unlimited scences</li>
                  <li>12 send and return tracks</li>
                  <li>256 mono audio input channels</li>
                  <li>256 mono audio output channels</li>
                  <li>Capture MIDI</li>
                  <li>Complex wrap modes</li>
                  <li>Audio-slicing</li>
                  <li>Audio to MIDI</li>
                  <li>Max for Live</li>
                  <li className="bg-success my-3 px-3">New in Live 11</li>
                  <li>Comping</li>
                  <li>Linked-track-editing</li>
                  <li>MIDI Polyphonic Expression</li>
                  <li>Tempo Following</li>
                  <li>Note and Velocity Chance</li>
                </ul>
              </div>
            </div>
          </section>
        )}
        <hr />

        <div className="row">
          <div className="col-3 d-flex align-items-center">
            <button className="btn border-0 py-0 my-0" onClick={toggs}>
              {!togg ? (
                <i className="fa-solid fa-plus m-0 p-0 d-flex"></i>
              ) : (
                <i className="fa-solid fa-minus m-0 p-0"></i>
              )}
            </button>
            <p className="pt-3">Software Instruments</p>
          </div>
          <div className="col-3 fw-semibold fs-5">
            <p className="pt-3">4 Software Instruments</p>
          </div>
          <div className="col-3 fw-semibold fs-5">
            <p className="pt-3">6 Software Instruments</p>
          </div>
          <div className="col-3 fw-semibold fs-5">
            <p className="pt-3">17 Software Instruments</p>
          </div>
        </div>
        {togg && (
          <section>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>Drum Rack</li>
                  <li>Impulse</li>
                  <li>Instruments Rack</li>
                  <li>Simpler</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>Drum Rack</li>
                  <li>Impulse</li>
                  <li>Instruments Rack</li>
                  <li>Simpler</li>
                  <li>DrumSynths</li>
                  <li>External Instruments</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="list-unstyled">
                  <li>Drum Rack</li>
                  <li>Impulse</li>
                  <li>Instruments Rack</li>
                  <li>Simpler</li>
                  <li>DrumSynths</li>
                  <li>External Instruments</li>
                  <li className="d-flex">
                    <div className="bg-primary plays me-1">
                      <button className="text-white btn fs-6 px-2  py-0 border-0 border-primary">
                        <i className="fa-solid fa-play fs-6"></i>
                      </button>
                    </div>
                    Analog
                  </li>
                  <li>Bass</li>

                  <li className="d-flex ">
                    <p className="bg-success p-1 d-flex">
                      <div className="bg-primary plays me-1">
                        <button className="text-white btn fs-6 px-2  py-0 border-0 border-primary">
                          <i className="fa-solid fa-play fs-6"></i>
                        </button>
                      </div>
                      Collision
                    </p>
                  </li>
                  <li>CV Instruments</li>
                  <li>CV Triggers</li>
                </ul>
              </div>
            </div>
          </section>
        )}
        <hr />
      </section>
      <section></section>
      <section className="py-4 container">
        <div className="row">
          <div className="col-md-6">
            <h2>FAQ</h2>
            <hr />
          </div>
          <div className="col-md-6">
            <h3>Live 11 System Requirements</h3>
            <div className="d-flex fs-5" id="nav">
              <p
                onClick={toggled}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                macOs
              </p>
              <p
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                onClick={toggledd}
              >
                Windows
              </p>
            </div>
            <div>
              {!toggles && (
                <ul>
                  <li>macOS High Sierra 10.13 to Ventura 13</li>
                  <li>Intel® Core™ i5 processor or Apple M1</li>
                  <li>8GB RAM</li>
                  <li>1280x800 display resolution</li>
                  <li>Core Audio compliant audio interface recommended</li>
                  <li>
                    Access to an internet connection for authorizing Live (for
                    downloading additional content and updating Live, a fast
                    internet connection is recommended)
                  </li>
                  <li>
                    Approximately 3 GB disk space on the system drive for the
                    basic installation (8 GB free disk space recommended)
                  </li>
                  <li>
                    Up to 76 GB disk space for additionally available sound
                    content
                  </li>
                </ul>
              )}
              {toggles && (
                <ul>
                  <li>Windows 10 (Build 1909 and later)</li>
                  <li>
                    Intel® Core™ i5 processor or an AMD multi-core processor.
                  </li>
                  <li>8GB RAM</li>
                  <li>1366x768 display resolution</li>
                  <li>
                    ASIO compatible audio hardware for Link support (also
                    recommended for optimal audio performance)
                  </li>
                  <li>
                    Access to an internet connection for authorizing Live (for
                    downloading additional content and updating Live, a fast
                    internet connection is recommended)
                  </li>
                  <li>
                    Approximately 3 GB disk space on the system drive for the
                    basic installation (8 GB free disk space recommended)
                  </li>
                  <li>
                    Up to 76 GB disk space for additionally available sound
                    content
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Buy;