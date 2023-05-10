import React from 'react';
import Livenav from './Livenav';
import '../assets/live.css';
import { Link } from 'react-router-dom';
import c28 from '../assets/c28.avif'
import Footer from './Footer';
function Features() {
  return (
    <div className="">
      <Livenav />
      <div className="container">
        <header className="py-5 d-flex flex-column justify-content-center">
          <h1>All new features and updates in Live 11</h1>
          <p>
            To see highlights of the release in more detail,{" "}
            <Link to="/live" className="text-decoration-none">
              visit the Live 11 page &#62;
            </Link>{" "}
          </p>
        </header>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="fs-4">Comping</h2>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5"> Comping</h3>
            <p>
              Live organizes multiple passes of an audio or MIDI performance
              into individual takes. Combine the best of many takes or find
              creative new combinations.
            </p>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Linked-track editing</h3>
            <p>
              Link two or more audio or MIDI tracks to edit or comp their
              content simultaneously.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h2 className="fs-4">MPE</h2>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">MPE compatibility</h3>
            <p>
              Add bends, slides and pressure for each individual note in a
              chord. Add subtle expression variations, morph between chords and
              create evolving sonic textures.
            </p>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">MPE-capable native devices</h3>
                <p>
                  Wavetable, Sampler and Arpeggiator now support MPE. Use Push’s
                  pad pressure to control parameters per note.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Expression View</h3>
            <p>
              Add and edit pitch, timbre and pressure variations of individual
              notes directly in a new tab in the Clip Detail View.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h2 className="fs-4">New devices</h2>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Hybrid Reverb</h3>
            <p>
              Combines convolution and algorithmic reverbs, making it possible
              to create any space, from accurate real-life environments to those
              that defy physical reality.
            </p>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Spectral Time</h3>
                <p>
                  Transforms sound into partials and feeds them into a
                  frequency-based delay, resulting in metallic echoes,
                  frequency-shifted and reverb-like effects. The Freeze function
                  captures and holds audio.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">PitchLoop89</h3>
                <p>
                  Based on an early digital effects processor, this device
                  creates jittery glitch effects, delayed digital shimmers and
                  outlandish vibrato to add character to sounds in the studio or
                  onstage. Created in collaboration with Robert Henke.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Spectral Resonator</h3>
            <p>
              Breaks the spectrum of an incoming audio signal into partials,
              then stretches, shifts and blurs the result by a frequency or a
              note in subtle or radical ways. Play it like an instrument with
              MIDI.
            </p>

            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Inspired by Nature</h3>
                <p>
                  Six playful instruments and effects that use natural and
                  physical processes as their inspiration. Created in
                  collaboration with Dillon Bastan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h2 className="fs-4">Updated devices</h2>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Chorus-Ensemble</h3>
            <p>
              The updated version of Chorus now has a wider range of sound
              shaping capabilities – add vibrato, spread the left and right
              channels of the signal across the stereo field, and add thick
              3-delay line chorus.
            </p>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Phaser-flanger</h3>
                <p>
                  Phaser and Flanger have been combined and now feature a new,
                  lusher sound with increased frequency and modulation ranges,
                  expressive improvements on existing modes, and a new Doubler
                  mode for short modulatable delay.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5"> Redux</h3>
            <p>
              Redux adds a wider range of sounds from vintage digital gear
              including harsh distortion, digital and aliasing artifacts, as
              well as warm and saturated 8-bit textures.
            </p>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Shifter</h3>
                <p>
                  In Live 11.1, Frequency Shifter is updated with classic
                  frequency shifting, ring modulation and real-time monophonic
                  pitch shifting, for effects ranging from subtle phasing and
                  radically pitched to dissonant, metallic sounds.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-md-4 px-3">
            <h2 className="fs-4">Rack improvements</h2>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Macro Variations</h3>
            <p>
              Store the state of Macros for later recall – this is a fast way to
              create instant variations to sounds, or builds and drops during a
              performance.
            </p>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Randomize Macro value</h3>
                <p>
                  Randomize the state of your Macros or map the randomization
                  button to MIDI.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Flexible Macro Configuration</h3>
            <p>Set your Racks up to have between 1 and 16 Macros.</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 px-3">
            <h2 className="fs-4">Live tempo following</h2>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Tempo following</h3>
            <p>
              Live listens to and adjusts its tempo based on incoming audio in
              real time, making it a dynamic part of the band instead of the
              tempo source that everyone has to follow.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 px-3">
            <h2 className="fs-4">Chance tools</h2>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Note chance</h3>
            <p>
              Set the probability that a note or drum hit will occur and let
              Live generate surprising variations to your patterns that change
              over time.
            </p>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Follow Actions</h3>
                <p>
                  Live 11 adds Scene Follow Actions for evolving arrangements.
                  Follow Actions can now jump to specific clips and enable and
                  disable Follow Actions globally.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Velocity chance</h3>
            <p>
              Define ranges for velocity probability for subtle, humanized
              variations in the dynamics of your patterns.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4 px-3">
            <h2 className="fs-4">New Sounds</h2>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Voice Box</h3>
            <p>
              A comprehensive collection of contemporary vocal samples from
              multiple voices, a set of playable vocal instruments, and Effect
              Racks designed for vocal processing.
            </p>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Drone Lab</h3>
                <p>
                  Sustained tonal and textural samples, generative noise,
                  multisampled instruments, plus devices and Effect Racks
                  designed for experimentation.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Brass Quartet</h3>
                <p>
                  This instrument highlights the natural breathiness, range of
                  expression and broad tonality of the brass quartet. Created in
                  collaboration with Spitfire Audio.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-3">
            <h3 className="fs-5">Mood Reel</h3>
            <p>
              Evocative layered instruments that combine organic and synthetic
              sounds with textural elements to add mood, space and movement to
              productions.
            </p>
            <div className="row ">
              <div className="col-md-12 px-3">
                <h3 className="fs-5">Upright Piano</h3>
                <p>
                  Upright Piano is close-recorded for an intimate feel – a
                  classic sound that is at home in many styles of music. Created
                  in collaboration with Spitfire Audio.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3 className="fs-5">String Quartet</h3>
                <p>
                  This combination of two violins, viola and cello has a sound
                  that is immediately intimate, and is also a great starting
                  point for sonic exploration. Created in collaboration with
                  Spitfire Audio.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="py-5">
          Need more details?{" "}
          <Link to="https://www.ableton.com/en/release-notes/live-11/">
            Check out the Release Notes &#62;
          </Link>{" "}
        </p>
      </section>

      <section className="features d-flex justify-content-center align-items-center">
        <Link to="/" className="text-decoration-none">
          <h3>See all new features in Live 11 &#62; </h3>
        </Link>
      </section>
      <section className="tryfree">
        <div className="row p-0 m-0">
          <div className="col-md-6 bg-warning py-5 d-flex p-auto align-items-center justify-content-center flex-column">
            <h1>Try Live 11 for free</h1>
            <p>Get all features of Live Suite free for 90 days.</p>
            <Link to='/trial' className='text-decoration-none'>Get the trial &#62; </Link>
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

export default Features