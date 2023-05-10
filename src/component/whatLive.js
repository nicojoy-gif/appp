import React from 'react';
import '../assets/live.css';
import e1 from '../assets/e1.jpg';
import e2 from '../assets/e2.jpg';
import e3 from '../assets/e3.jpg';
import e4 from '../assets/e4.jpg';
import Livenav from './Livenav'
import e5 from '../assets/e5.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer'
function WhatLive() {
  return (
    <div>
      <Livenav />
      <header className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="header-title">What is Live?</h1>
        <p className="text-primary fs-4 py-3">
          <i className="fa-solid fa-circle-play"></i> See an overview of Live
        </p>
      </header>
      <div className="header-img">
        <img src={e1} alt="music-photography" />
      </div>
      <div className="what-box">
        <div className="container py-5">
          <p className="fs-4 fw-semibold">
            Live is fast, fluid and flexible software for music creation and
            performance. It comes with effects, instruments, sounds and all
            kinds of creative features—everything you need to make any kind of
            music.
          </p>
          <p className="fs-4 fw-semibold">
            Create in a traditional linear arrangement, or improvise without the
            constraints of a timeline in Live’s Session View. Move freely
            between musical elements and play with ideas, without stopping the
            music and without breaking your flow.
          </p>
          <div className="py-5">
            <Link to="/trial" className="text-decoration-none fw-semibold fs-1">
              Try Live 11 free 90 days &#62;
            </Link>
            <p className="fs-6 fw-semibold">
              The Live 11 Suite trial includes all the features of the full
              version, including saving and exporting. You can use it alongside
              your current version of Live.
            </p>
          </div>
        </div>
      </div>
      <div>
        <header className="d-flex justify-content-start ps-5 align-items-center">
          <h1 className="header-title ps-5">Create with Live</h1>
        </header>
        <div className="row  container-fluid">
          <div className="col-md-5 px-5 d-flex flex-column justify-content-center">
            <h2 className="">Sketch, tweak and experiment</h2>
            <p className="">
              In Live’s Session View you can freely mix and match musical ideas
              without the constraints of a timeline. Getting ideas down is
              lightning fast, and it’s the ideal place for improvisation. You
              can play MIDI and audio loops of different lengths in any
              combination, without ever stopping the music.
            </p>
            <Link
              to="https://www.youtube.com/watch?v=LGCxbIw4OR8"
              className="text-decoration-none fw-semibold"
            >
              <i className="fa-solid fa-circle-play"></i> Watch: Session View
            </Link>
          </div>
          <div className="col-md-7 music-col  m-0 p-0">
            <img src={e2} alt="music-photography" />
          </div>
        </div>
        <div className="row py-5 container-fluid">
          <div className="col-md-7 music-col  m-0 p-0">
            <img src={e3} alt="music-photography" />
          </div>
          <div className="col-md-5 px-5 d-flex flex-column justify-content-center">
            <h2 className="">Get into the details</h2>
            <p className="">
              The Arrangement View is where you can organize music along a
              timeline. Record multiple passes of an audio or MIDI performance
              into individual takes. Find the best parts of each and stitch them
              together for the desired final result.
            </p>
            <p className="">
              Develop an initial idea or organize your parts to create the right
              musical flow for your track. You can also simply record everything
              you do in the Session View into the Arrangement to improvise your
              way to a finished song.
            </p>
            <Link
              to="https://www.youtube.com/watch?v=riOD-fnyCsg"
              className=" fw-semibold text-decoration-none"
            >
              <i className="fa-solid fa-circle-play"></i> Watch: Arrangement
              View
            </Link>
          </div>
        </div>
        <div className="row py-5 container-fluid">
          <div className="col-md-5 px-5 d-flex flex-column justify-content-center">
            <h2 className="">Get your ideas into Live</h2>
            <p className="">
              Whatever shape inspiration takes, Live gives you the means to
              seize it. Record hardware synths, software plugins, drum machines,
              guitars or any audio from the real world. You can now use Capture
              MIDI to record notes after you’ve played them, turning your most
              spontaneous ideas (and accidents) into music. And there’s Live’s
              audio-to-MIDI features, which let you turn drum breaks, and melody
              or harmony parts into MIDI patterns that you can edit and reuse
              with your own sounds.
            </p>
          </div>
          <div className="col-md-7 music-col  m-0 p-0">
            <img src={e4} alt="music-photography" />
          </div>
        </div>
        <div className="row py-5 container-fluid">
          <div className="col-md-5 px-5 d-flex flex-column justify-content-center">
            <h2 className="">Use any sounds, at any tempo</h2>
            <p className="">
              One of the things that makes creating with Live so fluid is the
              ability to change the tempo and timing of any audio, in real-time,
              without stopping the music. We call this warping. Use warping to
              mix and match loops from a variety of tempos, fix timing errors in
              recorded performances, or radically reshape any audio into new
              sound design directions.
            </p>

            <Link
              to="https://www.youtube.com/watch?v=tlsRVC72hx4"
              className=" fw-semibold text-decoration-none"
            >
              <i className="fa-solid fa-circle-play"></i> Watch: Wraping clips
            </Link>
          </div>
          <div className="col-md-7 music-col  m-0 p-0">
            <img src={e5} alt="music-photography" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WhatLive