import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import c20 from '../assets/c20.avif';
import '../assets/trial.css'
import Footer from './Footer';
function Trial() {
  const system = useRef(null)
  const [toggle, setToggle] = useState(true);
  const toggled = () => {
    setToggle(false)
  }
  const toggler = () => {
    setToggle(true)
  }
const scrollToSection = (elementRef) => {
window.scrollTo({
  top: elementRef.current.offsetTop,
  behavior: "smooth",
 });
};  
  return (
    <div className="">
      <div className="row m-0 p-0">
        <div className="col-lg-8 trial d-flex align-items-start flex-column ">
          <div className="m-5">
            <h1> Try Ableton Live for free</h1>
            <p className="fs-5 fw-semibold">
              Get all the features of Live 11 Suite free for 90 days.
            </p>
            <form className="d-flex align-items-center ">
              <select
                className="form-select rounded-0 form-select-lg my-3  border border-2 border-dark"
                aria-label=".form-select-lg example"
              >
                <option selected>Windows 64-bit</option>
                <option value="1">macOs Universal</option>
                <option value="2">macOs Intel-only</option>
              </select>
              <button className="btn rounded-0 btn-primary  mx-3 fw-semibold btn-lg">
                Download
              </button>
            </form>
            <p className="fw-semibold">
              <Link
                to="#systemReq"
                onClick={() => scrollToSection(system)}
                className=" py-0 text-decoration-none"
              >
                System Requirements &#62;
              </Link>
            </p>
            <p className="fw-semibold">
              <Link to="/eula" className=" my-0 text-decoration-none">
                End User License Agreement &#62;
              </Link>
            </p>
            <div>
              <p>
                <i className="fa-solid fa-circle-play play-icon"></i>

                <Link
                  to="https://www.youtube.com/watch?v=G64-yM0Bs78"
                  target="_blank"
                  className=" px-1 fw-semibold text-decoration-none"
                >
                  Watch : What is Live?
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 trial-img m-0 p-0">
          <img src={c20} alt="free" className="m-0 p-0" />
        </div>
      </div>

      <div className="container my-5" id="systemReq" ref={system}>
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h3 className="pb-3">What is Ableton Live?</h3>
              <p>
                Ableton Live lets you easily create, produce and perform music
                within one intuitive interface. Live keeps everything in sync
                and works in real-time, so you can play and modify your musical
                ideas without interrupting the creative flow.
              </p>
              <p>
                Live comes with a versatile collection of instruments, sounds,
                kits and loops for creating any kind of music and provides a
                full complement of effects to tweak and process your sound.
              </p>
            </div>
            <div className="row my-5">
              <div>
                <h3 className="pb-3">Ableton Live 11 Suite includes:</h3>
                <ul>
                  <li>
                    17 Instruments, including Wavetable, Operator, Simpler,
                    Analog and more
                  </li>
                  <li>
                    74 Effects for processing Audio and MIDI, including Hybrid
                    Reverb, Spectral Resonator, Spectral Time, PitchLoop89, Echo
                    and many more
                  </li>
                  <li>
                    Instant mappings so you can use Live with your keyboards or
                    controller
                  </li>
                  <li>
                    Max for Live to give you even more instruments, effects and
                    customizations from the Live community, and to let you
                    customize Live yourself
                  </li>
                </ul>
              </div>
              <div className="row my-5">
                <h3>Installation on a Windows PC</h3>
                <p>
                  Unzip the file and run setup.msi. Then open Live and follow
                  the instructions there. If you want to uninstall the trial at
                  any point,{" "}
                  <a
                    href="https://help.ableton.com/hc/en-us/articles/209067729-How-to-uninstall-Live-1-9-completely"
                    className="text-decoration-none"
                  >
                    {" "}
                    you can find help here{" "}
                  </a>
                </p>
              </div>
              <div className="row">
                <h3>Using an earlier version of Live?</h3>
                <p>
                  You can install the trial next to your current version. Your
                  library will not be overwritten or altered.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mx-auto">
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
                onClick={toggler}
              >
                Windows
              </p>
            </div>
            <div>
              {!toggle && (
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
              {toggle && (
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
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Trial