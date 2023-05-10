import React from 'react'
import b15 from "../assets/b15.jpg";
import '../assets/about.css'
import Footer from './Footer';
import Navbar from './Navbar';
function Job() {
  return (
    <>
      <Navbar />
      <div className="container py-3">
        <div className="bgg position-relative">
          <img src={b15} alt="about" className="bg mx-auto d-block " />
          <h1 className="job-header Display-1 text-center fw-semibold position-absolute top-50 start-50 translate-middle">
            Jobs At Ableton
          </h1>
        </div>
        <section className="my-5 ">
          <p className="fw-semibold fs-3 m-auto para py-4">
            Working at Ableton means being a part of creating products that
            shape the future of music culture in a dynamic and diverse
            environment
          </p>
          <p className="fs-5 m-auto  para p-2 ">
            Here at Ableton, we come from a wide range of cultural and
            professional backgrounds. We work hard to foster an environment in
            which people can grow both personally and professionally. We believe
            that diverse groups of people make better teams. We’re committed to
            increasing diversity in our workplace and providing equal
            opportunity throughout our recruitment process. Because of this we
            ask that you do not include a picture in your application documents.
            Thank you very much for your understanding.
          </p>
          <p className="fs-5 m-auto  para pt-2 pb-5">
            If you want to apply for one of our open positions, we would be
            happy to receive your application through our application form.
            Please upload all necessary documents there.
          </p>
        </section>
        <section className="my-5 ">
          <p className="fs-5 m-auto  para pt-2 pb-5">
            <h2 className="py-3 fs-3">Commerce</h2>
            <ul className="list-unstyled">
              <li className="py-1 fs-6">
                <p className="text-primary my-0">
                  Kreditorenbuchhalter (d/w/m) &#62;
                </p>
                <p className="text-secondary py-0">Ableton AG / Germany</p>
              </li>
              <li className="py-1 fs-6">
                <p className="text-primary my-0">
                  Americas Tax Specialist (d/f/m) &#62;
                </p>
                <p className="text-secondary py-0">Ableton Inc. / USA</p>
              </li>
              <li className="py-1 fs-6">
                <p className="text-primary my-0">
                  Referendar:in fur de Wahlstation bzw. als Teil der
                  Anwaltsstation (d/w/m) &#62;
                </p>
                <p className="text-secondary py-0">Ableton AG / Germany</p>
              </li>
              <li className="py-1 fs-6">
                <p className="text-primary my-0">
                  Senior Legal Counsel (d/w/m) &#62;
                </p>
                <p className="text-secondary py-0">Ableton AG / Germany</p>
              </li>
            </ul>
          </p>
        </section>
        <hr className="my-2" />
        <Footer />
      </div>
    </>
  );
}

export default Job