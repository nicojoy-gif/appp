import React from "react";
import "../assets/live.css";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import Footer from "./Footer";
import Livenav from "./Livenav";
function Max() {
  return (
      <div>
          <Livenav />
      <header className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="header-title">Max Live?</h1>
        <p className="text-primary fs-4 py-3">
          <i className="fa-solid fa-circle-play"></i> What is Max for Live
        </p>
      </header>
      <div className="header-img">
        <img src={f1} alt="music-photography" />
      </div>
      <div className="wha-box">
        <div className="container py-5">
          <p className="fs-4 fw-semibold py-5">
            Max for Live puts the vast creative potential of the Max development
            environment directly inside of Live. It powers a range of
            instruments and effects. And for those who want to go further, it
            lets you customize devices, create your own from scratch, and
            explore another world of devices produced by the Max for Live
            community.
          </p>
        </div>
      </div>
      <div>
        <header className="d-flex justify-content-start ps-5 align-items-center">
          <h1 className="header-title px-5">Design your system</h1>
        </header>
        <div className="row py-5 container-fluid">
          <div className="col-md-5 px-5 d-flex flex-column justify-content-center">
            <h2 className="">Create and customize</h2>
            <p className="">
              Max for Live is a platform to build your own instruments and
              effects, tools for live performance and visuals, and much more.
              You can open up any of Live’s Max devices, see how they’re built,
              and change them to meet your needs. You can build your own from
              scratch using the same components. And you can even use Max to
              change the way Live works, including the properties of tracks,
              clips and scenes.
            </p>
          </div>
          <div className="col-md-7 music-col  m-0 p-0">
            <img src={f2} alt="music-photography" />
          </div>
        </div>
        <div className="row py-5 container-fluid">
          <div className="col-md-7 music-col  m-0 p-0 position-relative">
            <figure>
              <img src={f3} alt="music-photography" />
              <p className="text-primary fs-1 position-absolute top-50 start-50 translate-middle">
                <i className="fa-solid fa-circle-play"></i> 
              </p>
              <figcaption>
                The Max for Live Connection Kit lets you extend and interact
                with Live in new and experimental ways.
              </figcaption>
            </figure>
          </div>
          <div className="col-md-5 px-5 d-flex flex-column justify-content-center">
            <h2 className="">Extend Live</h2>
            <p className="">
              Max for Live can completely change how Live interacts with all
              things external. Reconfigure connections to hardware controllers &
              synthesizers. Route audio to multiple sets of speakers from your
              Live project. Use Live to control physical objects like motors and
              lights using Arduino, OSC and other technologies—there are
              infinite possibilities for connection and control between Live and
              the world surrounding it.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Max;
