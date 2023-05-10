import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

import '../assets/live.css';
function Compare() {
     const system = useRef(null);
     
     const scrollToSection = (elementRef) => {
       window.scrollTo({
         top: elementRef.current.offsetTop,
         behavior: "smooth",
       });
    };  
    

  return (
    <div className="container">
      <header className="d-flex  flex-column ">
        <h1 className="py-5">
          Live comes in three editions: Intro, Standard and Suite. They share
          common features, but Standard and Suite have additional features,
          instruments, effects, and Packs.
        </h1>
        <ul className="list-unstyled text-start fs-6 d-lg-flex align-items-start">
          <li className=" fw-semibold">Jump to:</li>
          <li>
            <Link
              to="#newFeatures"
              onClick={() => scrollToSection(system)}
              className=" px-2 text-decoration-none"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="#setup"
              onClick={() => scrollToSection(system)}
              className=" px-2 text-decoration-none"
            >
              Live Key Features
            </Link>
          </li>
          <li>
            <Link
              to="#interface"
              onClick={() => scrollToSection(system)}
              className=" px-2 text-decoration-none"
            >
              Software instruments
            </Link>
          </li>
          <li>
            <Link
              to="#instrument"
              onClick={() => scrollToSection(system)}
              className=" px-2 text-decoration-none"
            >
              Packs
            </Link>
          </li>
          <li>
            <Link
              to="#workflow"
              onClick={() => scrollToSection(system)}
              className=" px-2 text-decoration-none"
            >
              Audio Effects
            </Link>
          </li>
          <li>
            <Link
              to="#workflow"
              onClick={() => scrollToSection(system)}
              className=" px-2 text-decoration-none"
            >
              MIDI Effects
            </Link>
          </li>
          <li>
            <Link
              to="#workflow"
              onClick={() => scrollToSection(system)}
              className=" px-2 text-decoration-none"
            >
              System Requirements
            </Link>
          </li>
        </ul>
      </header>
      <section>
        <table className="table fs-5">
          <tbody>
            <tr>
              <th scope="row" colSpan="9">
                Overview
              </th>
              <td className="text-success">Intro</td>
              <td className="text-info">Standard</td>
              <td>Suite</td>
            </tr>
            <tr>
              <th scope="row" colSpan="9">
                Key Features
              </th>
              <td>Limited</td>
              <td>Full</td>
              <td>Full</td>
            </tr>
            <tr>
              <th scope="row" colSpan="9">
                Software Instruments
              </th>
              <td>4</td>
              <td>6</td>
              <td>17</td>
            </tr>
            <tr>
              <th scope="row" colSpan="9">
                Sounds
              </th>
              <td>1500+</td>
              <td>1800+</td>
              <td>2000+</td>
            </tr>
            <tr>
              <th scope="row" colSpan="9">
                Library Size
              </th>
              <td>5+ GB</td>
              <td>10+ GB</td>
              <td>70+ GB</td>
            </tr>
            <tr>
              <th scope="row" colSpan="9">
                Audio Effects
              </th>
              <td>21</td>
              <td>37</td>
              <td>60</td>
            </tr>
            <tr>
              <th scope="row" colSpan="9">
                MIDI Effects
              </th>
              <td>8</td>
              <td>14</td>
              <td>16</td>
            </tr>
          </tbody>
        </table>
       
         
      </section>
    </div>
  );
}

export default Compare