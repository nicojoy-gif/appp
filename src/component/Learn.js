import React, { useRef, useState } from 'react'
import Livenav from './Livenav'
import { Link } from 'react-router-dom';
import '../assets/live.css'
import v1 from '../assets/v1.mp4';
import Footer from './Footer';
function Learn() {
  const [toggle, setToggle] = useState(false);
  const system = useRef(null)
  const initialText = 'Show 9 more videos'
    const [text, setText] = useState(initialText)
  const toggler = () => {
    setToggle(!toggle)
    setText('see fewer videos')
  }
  
  
const scrollToSection = (elementRef) => {
window.scrollTo({
  top: elementRef.current.offsetTop,
  behavior: "smooth",
 });
};  
    return (
      <div>
        <Livenav />
        <section className="container" id="newFeatures">
          <header className="d-flex   flex-column ">
            <h1 className="py-5">
              Get started with Live or go deeper into the details – whatever
              stage you’re at you’ll find videos to help you take your next
              steps with Live.
            </h1>
            <ul className="list-unstyled text-start fs-5 d-lg-flex align-items-start">
              <li className=' fw-semibold'>Jump to:</li>
              <li>
                <Link
                  to="#newFeatures"
                  onClick={() => scrollToSection(system)}
                  className=" px-2 text-decoration-none"
                >
                  {" "}
                  New features in Live 11
                </Link>
              </li>
              <li>
                <Link
                  to="#setup"
                  onClick={() => scrollToSection(system)}
                  className=" px-2 text-decoration-none"
                >
                  {" "}
                  setup
                </Link>
              </li>
              <li>
                <Link
                  to="#interface"
                  onClick={() => scrollToSection(system)}
                  className=" px-2 text-decoration-none"
                >
                  Interface
                </Link>
              </li>
              <li>
                <Link
                  to="#instrument"
                  onClick={() => scrollToSection(system)}
                  className=" px-2 text-decoration-none"
                >
                  Instruments and Effect
                </Link>
              </li>
              <li>
                <Link
                  to="#workflow"
                  onClick={() => scrollToSection(system)}
                  className=" px-2 text-decoration-none"
                >
                Workflow
                </Link>
              </li>
            </ul>
          </header>
          <div>
            <h2>New features in Live 11</h2>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols mt-5 ">
                    <p className="bg-dark text-white me-5"> New in Live 11</p>
                  </div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Wavetable: MPE</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols mt-5 ">
                    <p className="bg-dark text-white me-5"> New in Live 11</p>
                  </div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>

                <h4>Comping</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols mt-5 ">
                    <p className="bg-dark text-white me-5"> New in Live 11</p>
                  </div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Linked-Track Editing</h4>
              </div>
            </div>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols mt-5 ">
                    <p className="bg-dark text-white me-5"> New in Live 11</p>
                  </div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>MPE</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols mt-5 ">
                    <p className="bg-dark text-white me-5"> New in Live 11</p>
                  </div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>MPE Control</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols mt-5 ">
                    <p className="bg-dark text-white me-5"> New in Live 11</p>
                  </div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Chance Tools</h4>
              </div>
            </div>
            <p
              onClick={toggler}
              className="text-primary text-center py-2 border border-primary btn d-flex justify-content-center fs-4 fw-semibold"
            >
              <i class="fa-light fa-plus"></i> {text}
            </p>
            {toggle && (
              <section>
                <div className="row py-1">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols mt-5 ">
                        <p className="bg-dark text-white me-5">
                          {" "}
                          New in Live 11
                        </p>
                      </div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Keys and Scales</h4>
                  </div>

                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols mt-5 ">
                        <p className="bg-dark text-white me-5">
                          {" "}
                          New in Live 11
                        </p>
                      </div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Tempo Follower</h4>
                  </div>
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols mt-5 ">
                        <p className="bg-dark text-white me-5">
                          {" "}
                          New in Live 11
                        </p>
                      </div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Detail View</h4>
                  </div>
                </div>
                <div className="row py-1">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols mt-5 ">
                        <p className="bg-dark text-white me-5">
                          {" "}
                          New in Live 11
                        </p>
                      </div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>

                    <h4>Racks: Overview</h4>
                  </div>
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols mt-5 ">
                        <p className="bg-dark text-white me-5">
                          {" "}
                          New in Live 11
                        </p>
                      </div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Racks in Depth</h4>
                  </div>
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols mt-5 ">
                        <p className="bg-dark text-white me-5">
                          New in Live 11
                        </p>
                      </div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Follow Actions</h4>
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>

        <section className="container" id="setup">
          <div>
            <h2>Setup</h2>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="colss mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Setting up an audio interface</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="colss mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>

                <h4>Setting up MIDI</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="colss mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Configuring your audio ins and outs</h4>
              </div>
            </div>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="colss mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Installing Packs</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="colss mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Setting your perferences</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="colss mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Using your sounds and samples</h4>
              </div>
            </div>
            <p
              onClick={toggler}
              className="text-primary my-5 text-center py-2 border border-primary btn d-flex justify-content-center fs-4 fw-semibold"
            >
              <i class="fa-light fa-plus"></i> {text}
            </p>
            {toggle && (
              <section>
                <div className="row py-5">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="colss mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Saving Projects</h4>
                  </div>

                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="colss mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Using default</h4>
                  </div>
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="colss mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Using third-party plug-ins</h4>
                  </div>
                </div>
                <div className="row py-5">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="colss mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>

                    <h4>Computer Performance</h4>
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>
        <section className="container py-5" id="interface">
          <div>
            <h2>Interface</h2>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols1 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Live's user interface</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols1 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>

                <h4>Session View</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols1 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Arrangement View</h4>
              </div>
            </div>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols1 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Tracks</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols1 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Live's Browser</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols1 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Detail View</h4>
              </div>
            </div>
            <p
              onClick={toggler}
              className="text-primary my-5 text-center py-2 border border-primary btn d-flex justify-content-center fs-4 fw-semibold"
            >
              <i class="fa-light fa-plus"></i> {text}
            </p>
            {toggle && (
              <section>
                <div className="row py-5">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols1 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Live's Mixer</h4>
                  </div>

                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols1 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Transport bar and Follow behavior</h4>
                  </div>
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols1 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Hot swap and Browser Search</h4>
                  </div>
                </div>
                <div className="row py-5">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols1 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>

                    <h4>Saving preset</h4>
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>
        <section className="container py-5" id="workflow">
          <div>
            <h2>Workflows</h2>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Editing clips in Arrangement View</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>

                <h4>Arrangement View automation</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Automation vs. Modulation</h4>
              </div>
            </div>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Clips automation</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Modulation in Session View</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Moving between Session and Arrangement View</h4>
              </div>
            </div>
            <p
              onClick={toggler}
              className="text-primary my-5 text-center py-2 border border-primary btn d-flex justify-content-center fs-4 fw-semibold"
            >
              <i class="fa-light fa-plus"></i> {text}
            </p>
            {toggle && (
              <section>
                <div className="row py-5">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols2 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Recoording MIDI</h4>
                  </div>

                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols2 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Capturing MIDI</h4>
                  </div>
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols2 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Quantizing MIDI</h4>
                  </div>
                </div>
                <div className="row py-5">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols2 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>

                    <h4>Sequencing MIDI, part 1</h4>
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>
        <section className="container py-5" id="instrument">
          <div>
            <h2>Instruments & Effects</h2>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Wavetable: Overview</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>

                <h4>Wavetable: Changing wavetables</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Wavetable: Oscillator Effect Modes</h4>
              </div>
            </div>
            <div className="row py-1">
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Wavetable: Modulation</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Wavetable: MPE</h4>
              </div>
              <div className="col-lg-4 position-relative">
                <div className="col-box d-flex align-items-center justify-content-center">
                  <div className="cols2 mt-5 "></div>
                  <video controls className="mb-5">
                    <source src={v1} type="video/mp4" />
                  </video>
                  <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid fa-circle-play"></i>
                  </p>
                </div>
                <h4>Wavetable: Unison Modes</h4>
              </div>
            </div>
            <p
              onClick={toggler}
              className="text-primary my-5 text-center py-2 border border-primary btn d-flex justify-content-center fs-4 fw-semibold"
            >
              <i class="fa-light fa-plus"></i> {text}
            </p>
            {toggle && (
              <section>
                <div className="row py-5">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols2 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Wavetable: Using your own wavetables</h4>
                  </div>

                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols2 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Drum Buss</h4>
                  </div>
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols2 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>
                    <h4>Delay</h4>
                  </div>
                </div>
                <div className="row py-5">
                  <div className="col-lg-4 position-relative">
                    <div className="col-box d-flex align-items-center justify-content-center">
                      <div className="cols2 mt-5 "></div>
                      <video controls className="mb-5">
                        <source src={v1} type="video/mp4" />
                      </video>
                      <p className="text-primary  fs-1 position-absolute top-50 start-50 translate-middle">
                        <i className="fa-solid fa-circle-play"></i>
                      </p>
                    </div>

                    <h4>Hybrid Reverb</h4>
                  </div>
                </div>
              </section>
            )}
          </div>
        </section>
        <Footer />
      </div>
    );
}

export default Learn