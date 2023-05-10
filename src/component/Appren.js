import React from 'react'
import b17 from '../assets/b17.jpg'
import Footer from './Footer';
import '../assets/appre.css';
import b18 from '../assets/b18.jpg';
import Navbar from './Navbar';

function Appren() {
  return (
    <>
      <Navbar />
    <div className="container">
      <div className="row container">
        <div className="col-lg-8 pt-0 pb-4">
          <h1 className="py-1">Apprenticeships at Ableton</h1>
          <h3 className="py-1 fs-6 fw-semibold">
            What are they and what do you need to get started?
          </h3>
          <p className="py-1">
            Dual apprenticeship programs have a long tradition in Germany, and
            they play an important role in the country’s economy. The programs
            are a proven stepping stone towards a meaningful career without the
            need for a university degree. They give you the chance to apply
            theoretical knowledge learned in a vocational school to tasks in the
            workplace, while you divide your time between class and office days.
          </p>
          <img src={b17} alt="Apprentiship" className="appren-img" />
      <section className='py-5'>
                  <p className="py-1">
            Apprenticeships at Ableton What are they and what do you need to get
            started? Dual apprenticeship programs have a long tradition in
            Germany, and they play an important role in the country’s economy.
            The programs are a proven stepping stone towards a meaningful career
            without the need for a university degree. They give you the chance
            to apply theoretical knowledge learned in a vocational school to
            tasks in the workplace, while you divide your time between class and
            office days. At Ableton, you'll work towards the Office Management
            Assistant apprenticeship over two and a half years, developing your
            professional and personal skills in different teams. We look for
            people who are highly motivated to work in a commercial office
            environment, with an excellent level of German and very good
            English. It’s important that you’re eager to learn, organized in
            your work, and communicative when collaborating with others. Plus,
            you should be ready to get the most out of your development through
            giving and receiving feedback. You can expect a relaxed,
            professional atmosphere with a dynamic team of people who love music
            in return.
          </p>
          <p className="py-1">
            If this sounds like you, feel free to have a look at our detailed
            information in German here. And please share this page with anyone
            who might be interested to help us find our future colleagues!
                  </p>
               </section>
                      <img src={b18} alt='apprenticiship' className='py-4' />
        </div>
          </div>
          <hr className='py-2' />
      <Footer />
      </div>
      </>
  );
}

export default Appren