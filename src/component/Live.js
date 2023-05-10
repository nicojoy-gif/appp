import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import Livenav from './Livenav';
import '../assets/live.css';
import bg from '../assets/bg19.avif';
import c1 from '../assets/c1.avif'
import c2 from "../assets/c2.avif";
import c3 from "../assets/c3.avif";
import c4 from '../assets/c4.avif'
import c5 from '../assets/c5.avif'
import c6 from '../assets/c6.avif'
import c7 from '../assets/c7.jpg'
import c8 from '../assets/c8.jpg';
import c9 from "../assets/c9.png";
import c10 from "../assets/c10.png";
import c11 from "../assets/c11.png";
import c12 from "../assets/c12.png";
import c13 from "../assets/c13.png";
import c14 from "../assets/c14.png";
import c15 from "../assets/c15.png";
import c17 from "../assets/c17.avif";
import c18 from "../assets/c18.avif";
import c19 from "../assets/c19.avif";
import c20 from "../assets/c20.avif";
import c22 from "../assets/c22.avif";
import c23 from "../assets/c23.avif";
import c24 from "../assets/c24.avif";
import c25 from "../assets/c25.avif";
import c26 from "../assets/c26.avif";
import c27 from "../assets/c27.avif";
import c28 from "../assets/c28.avif";
import c31 from '../assets/c31.jpg';
import c32 from '../assets/c32.jpg';
import Footer from './Footer';
function Live() {
  const [toggle, setToggle] = useState(false);
  
  const toggler = () => {
    setToggle(!toggle)
  }
  return (
    <div className="container-fluid p-0 ">
      <Livenav />
      <section className="d-flex align-items-center text-center flex-column justify-content-center py-5 live-box">
        <h1 className="py-2">What's new in Live 11</h1>
        <p className="fs-3">
          <i className="fa-solid fa-circle-play play-icon"></i>
          <Link
            to="https://www.youtube.com/watch?v=zAisG2rrH_Q"
            target="_blank"
            className="text-primary text-decoration-none px-3"
          >
            See what's new
          </Link>
        </p>
      </section>
      <div className="mx-0 px-0 mt-5 contain">
        <img src={bg} alt="live" className="px-0  mx-0" />
      </div>
      <section className="tryLive ">
        <div className="container">
          <div className="live-box d-flex flex-column align-items-start justfy-content-center py-5">
            <h2 className="py-3">
              <Link to="/trial" className="text-decoration-none">
                Try Live 11 free for 90 days &#62;
              </Link>
            </h2>
            <p className="">
              The Live 11 Suite trial includes all the features of the full
              version, including saving and exporting. You can use it alongside
              your current version of Live.
            </p>
          </div>
          <div className="pt-1">
            <h2 className="py-2">Explore the features in Live 11:</h2>
            <div className=" text-center ">
              <div className="row my-3 live-row p-0 m-0 ">
                <div className="col-md-6 col-lg-4 text-center position-relative text-light">
                  <img src={c1} alt="explore" />
                  <h3 className="fs-5  fw-bold position-absolute top-50 start-50 translate-middle">
                    Create your perfect take with comping
                  </h3>
                </div>
                <div className="col-md-6 col-lg-4 text-center position-relative text-light">
                  <img src={c2} alt="explore" />
                  <h3 className="fs-5 fw-bold position-absolute top-50 start-50 translate-middle">
                    Add more feelings to your music
                  </h3>
                </div>
                <div className="col-md-6 col-lg-4 text-center position-relative text-light">
                  <img src={c3} alt="explore" />
                  <h3 className="fs-5 fw-bold position-absolute top-50 start-50 translate-middle">
                    Experiment with new devices
                  </h3>
                </div>
              </div>
              <div className="row live-row my-2 p-0 mx-0 ">
                <div className="col-lg-4 col-md-6 text-center  position-relative text-light">
                  <img src={c4} alt="explore" />
                  <h3 className="fs-5 fw-bold position-absolute top-50 start-50 translate-middle">
                    Do more on stage
                  </h3>
                </div>
                <div className="col-md-6  col-lg-4  text-center position-relative text-light">
                  <img src={c5} alt="exlore" />
                  <h3 className="fs-5 fw-bold position-absolute top-50 start-50 translate-middle">
                    Be unpredictable
                  </h3>
                </div>
                <div className="col-md-6  col-lg-4 text-center position-relative text-light">
                  <img src={c6} alt="explore" />
                  <h3 className="fs-5 fw-bold position-absolute top-50 start-50 translate-middle">
                    Work with new and updated sounds
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 vid-boxs container">
        <h1 className="py-5 box-header">Create your perfect take</h1>
        <figure className="fig">
          <div className="position-relative">
            <img src={c7} alt="explore" />
            <i
              className="fa-solid fa-circle-play plays 
          position-absolute top-50 start-50 translate-middle play-icon"
            ></i>
          </div>
          <figcaption className="fs-6 ">
            Artist records and edits multiple takes of her voice and a MIDI
            keyboard using comping
          </figcaption>
        </figure>
      </section>
      <section className="container rec">
        <div className="row fs-5 p-0 m-0">
          <div className="col-sm-6">
            <h2>Take recording and comping</h2>
            <p>
              Live organizes multiple passes of an audio or MIDI performance
              into individual takes. Pick the best moments of each performance
              and combine them to create your perfect take. Or approach sound
              design in a new way by splicing together random samples from your
              library.
            </p>
          </div>
          <div className="col-sm-6">
            <h2>Linked-Track Editing</h2>
            <p>
              Link two or more tracks to edit their content simultaneously. This
              makes editing multi-tracked instruments or performances with
              multiple musicians easy and fast whilst keeping everything in time
              across tracks. This feature also works for MIDI tracks.
            </p>
          </div>
        </div>
      </section>
      <section className=" vid-boxs py-5 container">
        <h1 className=" box-header py-5">Add more feeling to your music</h1>
        <figure className="fig">
          <div className="position-relative">
            <img src={c8} className="" alt="explore" />
            <i
              className="fa-solid fa-circle-play plays 
          position-absolute top-50 start-50 translate-middle play-icon"
            ></i>
          </div>
          <figcaption className="fs-6">
            Artist demonstrates MPE using a Roli Seaboard, Push and Live 11’s
            new Note Expression View Use your MPE-capable con
          </figcaption>
        </figure>
      </section>

      <section className="container mb-5">
        <div className="row fs-5 p-0 my-5">
          <div className="col-lg-6 px-3">
            <h2 className="fs-4 py-1">Use your MPE-capable controller</h2>
            <p>
              Plug in your MPE-capable controller and immediately add bends,
              slides and pressure for each individual note in a chord. Add
              subtle expression variations, morph between chords and create
              evolving sonic textures.
            </p>
          </div>
          <div className="col-lg-6 px-3">
            <h2 className="fs-4 py-1">What is MPE?</h2>
            <p>
              MPE stands for MIDI Polyphonic Expression. This way of using MIDI
              allows MPE-capable devices to control multiple parameters of every
              note in real time for more expressive instrumental performances.{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="my-5 live-btn  container d-flex align-items-center justify-content-center">
        <button
          type="button"
          className="btn fs-3 text-primary d-flex"
          onClick={toggler}
        >
          <i class="fa-thin fa-plus"></i> Learn more
        </button>
      </div>
      {toggle && (
        <section className="container mb-5">
          <div className="row fs-5 p-0 my-5">
            <div className="col-lg-6 px-3">
              <img src={c31} alt="music photography" />
              <h2 className="fs-4 py-1">Note Expression View</h2>
              <p>
                Edit the pitch, slide and pressure envelopes of each note to
                refine the expression of your takes. Or take your sound design
                further by sequencing polyphonic sound variations.
              </p>
            </div>
            <div className="col-lg-6 px-3">
              <img src={c32} alt="sound wave" />
              <h2 className="fs-4 py-1">More expressive sounds included</h2>
              <p>
                Wavetable, Sampler and Arpeggiator are all updated to support
                MPE. And Live comes with MPE presets for each device that bring
                new dimensions of interaction and playability to your sound. The
                new expressive possibilities also enable polyphonic aftertouch
                on Push.
              </p>
            </div>
          </div>
        </section>
      )}
      <main className="experiment">
        <section className=" container ">
          <div className="row container px-0 py-5 ">
            <div className=" ">
              <h1 className="py-5 px-2 ">Experiment with new devices</h1>
              <h3>Hybrid Reverb</h3>
              <p className="fs-6 col-lg-7">
                Hybrid Reverb combines convolution and algorithmic reverbs.
                Place your sounds in any space, from accurate real-life
                environments to those that defy physical reality. Use the
                algorithmic side to add control and modulate the reverb tail,
                run it in parallel or in series with the convolution side, or
                play Hybrid Reverb like an instrument for real-time sound
                design.
              </p>
              <figcaption>
                Select a sound to hear it with various Hybrid Reverb presets:
              </figcaption>
              <div className="row container">
                <div className="col-lg-4 d-none d-lg-block my-1 fs-5">
                  <div className="row my-1 text-primary">
                    <div className="col-1  bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid  fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Drums</div>
                    <div className="col-5 bg-white mx-1">Large Hall</div>
                  </div>
                  <div className="row my-1 text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Guitar</div>
                    <div className="col-5 bg-white mx-1">Reflections</div>
                  </div>
                  <div className="row my-1 text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Synth 1</div>
                    <div className="col-5 bg-white mx-1">Shimmer</div>
                  </div>
                  <div className="row my-1 text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Synth 2</div>
                    <div className="col-5 bg-white mx-1">Lo-fi</div>
                  </div>
                  <div className="row my-1 text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Vocal</div>
                    <div className="col-5 bg-white mx-1">Dry</div>
                  </div>
                </div>
                <div className="col-lg-7  my-1 exp-img ">
                  <img src={c9} alt="experiment" />
                </div>
              </div>
            </div>
          </div>
          <div className="row container px-0 py-5 ">
            <div className="">
              <h3>Spectral Time</h3>
              <p className="fs-6  col-lg-6">
                Transforms sound into partials and feeds them into a
                frequency-based delay, resulting in metallic echoes,
                frequency-shifted and reverb-like effects. The Freeze function
                captures and holds a slice of audio – either free-running or in
                time with the beat – for stuttered, glitched and washed-out
                effects.
              </p>
              <figcaption>
                Select a sound to hear it with various Spectral Time presets:
              </figcaption>
              <div className="row container ">
                <div className="col-lg-4 d-none d-lg-block fs-5">
                  <div className="row my-1  text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Piano</div>
                    <div className="col-5 bg-white mx-1">Delay</div>
                  </div>

                  <div className="row my-1  text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Beat</div>
                    <div className="col-5 bg-white mx-1">Eerie</div>
                  </div>
                  <div className="row my-1 text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Guitar</div>
                    <div className="col-5 bg-white mx-1">Flow</div>
                  </div>
                  <div className="row my-1 text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Voice</div>
                    <div className="col-5 bg-white mx-1">Freeze</div>
                  </div>
                  <div className="row my-1 text-primary">
                    <div className="col-1 bg-primary text-white d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="col-5 bg-white mx-1">Synth</div>
                    <div className="col-5 bg-white mx-1">Dry</div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-4 exp-img">
                  <img src={c10} alt="experiment" />
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col">
              <h3>PitchLoop89</h3>
              <p className="fs-6 col-lg-6">
                Create jittery glitch effects, delayed digital shimmers and
                outlandish vibrato with this Max for Live pitch shifting device
                created in collaboration with Robert Henke and inspired by the
                Publison DHM 89 – an early digital effects processor. It’s a
                flexible tool to add character to sounds in the studio, or for
                in-the-moment experimentation onstage.
              </p>
              <div className="bg-primary p-1 play-div ">
                <i className="fa-solid  fa-play"></i>
              </div>
              <div className="row p-0">
                <div className="col-8 exp-img">
                  <img src={c10} alt="experiment" />
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="">
              <h3> Inspired by Nature</h3>
              <p className="fs-6 col-lg-6">
                Six playful instruments and effects created in collaboration
                with Dillon Bastan that use natural and physical processes as
                their inspiration.
              </p>
              <div className="row p-0 my-5">
                <div className="col-lg-5 exp-img">
                  <div className="bg-primary p-1 play-div ">
                    <i className="fa-solid  fa-play"></i>
                  </div>
                  <img src={c11} alt="experiment" />
                  <figcaption className="fs-6">
                    Vector FM – Manipulate different combinations of FM
                    oscillators represented by moving particles – play with
                    movement and voices to create evolving modulations and
                    textures.
                  </figcaption>
                </div>
                <div className="col-lg-5  exp-img">
                  <div className="bg-primary p-1 play-div ">
                    <i className="fa-solid  fa-play"></i>
                  </div>
                  <img src={c12} alt="experiment" />
                  <figcaption>
                    Vector Grain – A granular looper that visualizes sound
                    modulation by moving particles on the interface – play with
                    attraction and magnetism or loop the particles through a
                    flow field.
                  </figcaption>
                </div>
              </div>
              <div className="row p-0 my-5">
                <div className="col-lg-5 exp-img">
                  <div className="bg-primary p-1 play-div ">
                    <i className="fa-solid  fa-play"></i>
                  </div>
                  <img src={c13} alt="experiment" />
                  <figcaption>
                    Vector Delay – Each visualized particle in this multitap
                    delay device represents a different delay line – create
                    pitch shifting or reverse delay effects with movement
                    controlled by physical forces.
                  </figcaption>
                </div>
              </div>
              <div className="row p-0 my-5">
                <div className="col-lg-7 exp-img">
                  <div className="bg-primary p-1 play-div ">
                    <i className="fa-solid  fa-play"></i>
                  </div>
                  <img src={c14} alt="experiment" />
                  <figcaption>
                    Emit – This visual granular synthesizer uses particles
                    shooting across a spectrogram to show the grain of a sample
                    being played, while vertical movements represent filtering
                    and panning.
                  </figcaption>
                </div>
              </div>
              <div className="row p-0 my-5">
                <div className="col-lg-5 exp-img">
                  <div className="bg-primary p-1 play-div ">
                    <i className="fa-solid  fa-play"></i>
                  </div>
                  <img src={c15} alt="experiment" />
                  <figcaption>
                    Tree Tone – Grow different fractal patterns inspired by
                    plants, then use them as resonators for internally generated
                    noise or incoming audio. Duration
                  </figcaption>
                </div>
              </div>
              <div className="row p-0 my-5">
                <div className="col-lg-6 exp-img">
                  <div className="bg-primary p-1 play-div ">
                    <i className="fa-solid  fa-play"></i>
                  </div>
                  <img src={c13} alt="experiment" />
                  <figcaption>
                    Bouncy Notes – Bounce balls up and down a piano roll to
                    create pitch shifting delay effects or arpeggiation with
                    this gravity-based MIDI sequencer.
                  </figcaption>
                </div>
              </div>

              <div className="row p-0 my-5">
                <div className="col-lg-3 exp-img position-relative">
                  <div className="bg-primary p-1 play-div position-absolute top-50 start-50 translate-middle">
                    <i className="fa-solid  fa-play"></i>
                  </div>
                  <img src={c17} alt="experiment" />
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <p className="text-primary fs-5  ">
                    <Link
                      to="https://www.youtube.com/watch?v=_m6F0ojhYpY"
                      className="text-decoration-none"
                    >
                      {" "}
                      Watch: New devices in Live 11
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="stage container-fluid">
        <h1 className="p-5">Do more on stage</h1>
        <div className="row p-0 mx-0 my-5">
          <div className="col-lg-7 position-relative music-img p-0">
            <div className="bg-primary text-light px-5  py-4 rounded-circle fs-1   position-absolute top-50 start-50 translate-middle">
              <i className="fa-solid text-light  fa-play"></i>
            </div>
            <figure>
              <img src={c18} alt="music" className="m-0" />
              <figcaption className="fs-6">
                A producer and drummer duo show tempo following and Macro
                improvements in action
              </figcaption>
            </figure>
          </div>
          <div className="col-md-3  d-flex flex-column m-auto justify-content-center">
            <h3>Tempo Following</h3>
            <p>
              Live listens to and adjusts its tempo based on incoming audio in
              real time, making it a dynamic part of the band instead of the
              tempo source that everyone has to follow. When you DJ, you can
              even turn Live into a tempo-synced FX box.
            </p>
          </div>
        </div>
        <div className="row p-0 mx-0 my-5">
          <div className="col-md-5 py-5">
            <div className="row py-5 m-0 ">
              <div className="col-md-7  py-3  d-flex flex-column m-auto justify-content-center">
                <h2>Macro Variations</h2>
                <p>
                  Store the state of your Macros for later recall – perfect for
                  creating instant variations to your sounds or builds and drops
                  during performance.
                </p>
              </div>
            </div>
            <div className="row p-0 m-0 ">
              <div className="col-md-7 py-3 d-flex flex-column m-auto justify-content-center">
                <h2>Rack improvements</h2>
                <p>
                  Configure your Racks to have between 1 and 16 Macros.
                  Randomize the state of your Macros with the randomization
                  button. Map this control to MIDI and perform drastic changes
                  in real time to surprise your audience and yourself.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 position-relative music-img p-0 m-0">
            <img src={c19} alt="music" className="m-0" />
          </div>
        </div>
        <div className="row p-0 mx-0 my-5">
          <div className="col-md-3  py-5  d-flex flex-column m-auto justify-content-center">
            <h2>Do more with Follow Actions</h2>
            <p>
              Follow Actions can now be linked to the clip length, making it
              faster to create interesting sequences of clips. Scene Follow
              Actions let you create evolving arrangements. You can also set
              Follow Actions to jump to specific clips and enable and disable
              Follow Actions globally.
            </p>
          </div>
          <div className="col-md-7 position-relative music-img p-0">
            <img src={c20} alt="music" className="m-0" />
          </div>
        </div>
      </section>

      <section className="sound  py-5">
        <div className="container">
          <h1 className="py-5">Work with new sounds</h1>
          <h3>New instruments</h3>
          <p className="col-md-6">
            Created in collaboration with Spitfire Audio, these three Instrument
            Packs bring the dynamic chamber ensemble textures to any production.
          </p>
          <div className="row p-0 m-0">
            <div className="col-md-4 position-relative">
              <img src={c22} alt="sounds" />
              <div className="bg-primary  p-1 play-divss">
                <i className="fa-solid  fa-play"></i>
              </div>
              <h4 className="fs-5 py-2">Upright Piano</h4>
              <p>
                Upright Piano infuses your productions with the natural warmth
                of an upright piano. Close-recorded for an intimate feel, this
                classic sound is at home in many styles of music – whether it’s
                used at its purest in a folk song or transformed in an
                electronic track.
              </p>
            </div>
            <div className="col-md-4 position-relative">
              <img src={c23} alt="sounds" />
              <div className="bg-primary p-1 play-divss">
                <i className="fa-solid  fa-play"></i>
              </div>
              <h4 className="py-2 fs-5">Brass Quartet</h4>
              <p>
                Feature a rich blend of trumpet, flugelhorn, tenor horn and
                trombone in your music. The instrument highlights the natural
                breathiness, range of expression and broad tonality of this
                brass quartet’s instrumentation.
              </p>
            </div>
            <div className="col-md-4 position-relative">
              <img src={c24} alt="sounds" />
              <div className="bg-primary p-1 play-divss">
                <i className="fa-solid  fa-play"></i>
              </div>
              <h4 className="fs-5 py-2 ">String Quartet</h4>
              <p>
                From delicate pizzicato droplets to full, vibrant layers, get
                the authentic timbres and textures of a string quartet. This
                combination of two violins, viola and cello has a sound that is
                immediately intimate, and is also a great starting point for
                sonic exploration.
              </p>
            </div>
          </div>
          <div className="py-5">
            <h3 className="pt-5">New Curated Collections</h3>
            <p className="col-md-6">
              These Packs capture the musical threads that tie evolving styles
              and scenes together. Each is a curated selection of instruments,
              clips and samples that share a common sonic theme.
            </p>
            <div className="row p-0 m-0">
              <div className="col-md-4 position-relative">
                <img src={c25} alt="sounds" />
                <div className="bg-primary  p-1 play-divs">
                  <i className="fa-solid  fa-play"></i>
                </div>
                <h4 className="fs-5 py-2">Voice Box</h4>
                <p>
                  Voice Box invites you to get inventive with vocals. This Pack
                  features a comprehensive collection of contemporary vocal
                  samples from multiple voices, a set of playable vocal
                  instruments, and Effect Racks designed for vocal processing.
                </p>
              </div>
              <div className="col-md-4 position-relative">
                <img src={c26} alt="sounds" />
                <div className="bg-primary p-1 play-divs">
                  <i className="fa-solid  fa-play"></i>
                </div>
                <h4 className="py-2 fs-5">Mood Reel</h4>
                <p>
                  Set the scene with a collection of sounds for making music
                  with a modern narrative feel. Evocative layered instruments
                  combine organic and synthetic sounds with textural elements to
                  add mood, space and movement to productions.
                </p>
              </div>
              <div className="col-md-4 position-relative">
                <img src={c27} alt="sounds" />
                <div className="bg-primary  p-1 play-divs">
                  <i className="fa-solid  fa-play"></i>
                </div>
                <h4 className="fs-5 py-2 ">Drone Lab</h4>
                <p>
                  Drone Lab is a place of sustain. Weave complex, evolving
                  threads through your productions with tonal and textural
                  samples, generative noise, multisampled instruments, plus
                  devices and Effect Racks designed for experimentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features d-flex justify-content-center  align-items-center">
        <Link to="/" className="text-decoration-none">
          <h3>See all new features in Live 11 &#62; </h3>
        </Link>
      </section>
      <section className="tryfree">
        <div className="row p-0 m-0">
          <div className="col-md-6 bg-warning d-flex p-auto align-items-center py-5 justify-content-center flex-column">
            <h1>Try Live 11 for free</h1>
            <p>Get all features of Live Suite free for 90 days.</p>
            <Link to="/trial" className="text-decoration-none">
              Get the trial &#62;{" "}
            </Link>
          </div>
          <div className="col-md-6 p-0 m-0">
            <img src={c28} alt="try" className="p-0 m-0" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Live