import React from 'react';
import '../assets/note.css'
import n1 from '../assets/n1.jpg';
import n2 from '../assets/n2.jpg';
import n3 from '../assets/n3.jpg';
import Footer from './Footer';
import n from '../assets/n.mp4';
import { Link } from 'react-router-dom'
function Note() {
  return (
    <div className="">
      <section className="vid-box position-relative ">
        <video src={n} className="object-fit-cover" controls autoPlay></video>
        <div className="position-absolute  top-50 start-50 translate-middle">
          <div className="">
            <h1 className="">Note</h1>
            <p className="text-white fs-5">
              A playable IOS app for forming musical ideas
            </p>
          </div>
        </div>
      </section>
      <section className="p-0 m-0 ">
        <div className="row p-0 m-0">
          <div className="col-md-6 z-3 column-one d-flex py-5 justify-content-center">
            <div className="">
              <h3 className="pt-3">Make new ideas a habit</h3>
              <p className="py-2">
                Note is a place to start ideas, experiment with sounds and find
                direction. As part of your regular music-making routine, it can
                help you hone the skill of starting or ease into a creative
                headspace at the start of a session.
              </p>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </section>
      <section className="row p-0 m-0 col-img pb-5 ">
        <div className="col-5"></div>
        <div className="col-md-7 p-0 m-0 note-img position-relative">
          <div className="">
            <figure className="m-0 p-0  ">
              <img src={n1} alt="photography" />
              <button className="btn m-0 text-primary fs-1 position-absolute top-50 start-50 translate-middle">
                <i className="fa-solid fa-circle-play "></i>
              </button>

              <figcaption className="p-0 m-0 float-end">
                <p className="py-1 m-0">
                  Generate ideas, play with sounds, and find direction.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-6 p-0 m-0 col-img position-relative">
            <figure className="m-0 p-0  ">
              <img src={n2} alt="photography" />
              <button className="btn m-0 text-primary fs-1 position-absolute top-50 start-50 translate-middle">
                <i className="fa-solid fa-circle-play "></i>
              </button>
              <figcaption className="p-0 m-0 float-end">
                <p className="p-0 m-0">Noxz sketches his ideas as they come</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-lg-6 p-0 fs-5 m-0 d-flex align-items-center justify-content-center">
            <div className="col-para ">
              <p>
                Get your idea out or play until you find one using Note’s drum
                kits, melodic instruments and synth sounds. Or create your own
                sound palette by recording the sounds around you into Note’s
                sampler instruments.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 position-relative">
        <div className="row px-0 m-0 py-5">
          <div className="col-lg-7 note-colored d-flex align-items-center justify-content-center flex-column">
            <div className="note-para">
              <h3 className="py-4">Take it further in Live</h3>
              <p>
                Play just for fun, or start song ideas to continue in Live.
                Using Ableton Cloud, you can send your Note Set to Live without
                leaving the app. Then keep working with all the same devices as
                in Note, but with additional parameters available. You can edit
                all your MIDI notes, and all your samples and sounds from Note
                are exactly the same.
              </p>
              <Link to="/what" className="text-decoration-none">
                What is Live?
              </Link>
            </div>
          </div>
        </div>
        <div className=" container  col-imgs">
          <figure>
            <img src={n3} alt="photography" />
            <figcaption className="float-end">
              <p>Turn your sketches into songs</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="container py-5">
        <div className="row py-5">
          <div className="col-lg-6">
            <div>
              <h3 className="py-3">Ideas that travel</h3>
              <p>
                Connect Note to Ableton Cloud to send your five favorite Note
                Sets directly to Live’s browser, and pick up where you left off.
                Ableton Cloud is freely available for every edition of Live
                11.2.5, including the{" "}
                <Link to="/trial" className="text-decoration-none">
                  free trial.
                </Link>
                <br />
                <Link
                  to="https://help.ableton.com/hc/en-us/categories/5966520431378"
                  className="text-decoration-none"
                >
                  Learn how to use Ableton Cloud &#62;
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <h3 className="py-3">Sounds familiar</h3>
              <p>
                Note uses instruments and devices from Ableton Live. Play synth
                lines with melodic presets, finger-drum beats using Drum Sampler
                kits, and create instrumental melodies with Melodic Sampler
                instruments. Use Reverb, Delay and Chorus-Ensemble to give your
                sounds space and depth, or play with color and texture using
                Saturator, Redux and Phaser-Flanger.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 position-relative">
        <div className="row px-0 m-0 py-5 ">
          <div className="col-lg-6 note-yel p-0 m-0 d-flex flex-column justify-content-center align-items-center">
            <div className="col-para pb-5">
              <h3 className="py-4">Get started</h3>
              <p>
                Not everyone starts a song the same way. Note offers multiple
                starting points from which to explore new musical ideas. Then
                develop your ideas by adding to them and creating variations.
              </p>
              <ul className="p-0 m-0 fs-5 list-unstyled fw-semibold">
                <li className="py-5 px-0 m-0">Begin with a beat</li>
                <li className="py-5">Start with a melody</li>
                <li className="py-5">Sample your environments</li>
                <li className="py-5">Capture improvisations</li>
                <li className="py-5">Create variations</li>
              </ul>
            </div>
          </div>
         
          <div className="col-lg-6 note-light  p-0 m-0 d-flex flex-column justify-content-center align-items-center">
            <div className="col-para pt-5">
              <p className="pt-5">
                Turn the beat in your mind into something tangible, or just
                start finger drumming on the 16-pad grid and see what you come
                up with. You can quantize your drum pattern to correct loose
                timing, nudge notes, add in-time repeated beats or play in more
                layers of percussion. Plus, experiment with parameters and
                effects to make the sound your own.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Note