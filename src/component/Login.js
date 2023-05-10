import React from 'react'
import '../assets/login.css'
import Footer from './Footer';
function Login() {
  return (
    <div className="container login-box my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-5 mx-3">
          <h1 className="pt-5">Login</h1>
          <hr className="my-5" />
          <h3>Why do I need to log in?</h3>
          <p>
            To use any version of Live (including Live Lite or our free trial)
            you need an Ableton account. It takes less than a minute to create
            one, and even less to log in if you already have one.
          </p>
          <form className="col-lg-9">
            <div className="mb-5">
              <label for="exampleInputEmail1" className="form-label">
                E-mail or username
              </label>
              <input
                type="email"
                className="form-control bg-light rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleInputPassword1"
                className="form-label d-flex justify-content-between"
              >
                <p className="p-0 m-0">password</p>
                <p className="p-0 m-0">Forgot password?</p>
              </label>
              <input
                type="password"
                className="form-control bg-light rounded-0"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary rounded-0">
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-5 mx-5">
          <h1 className="pt-5">Register</h1>
          <hr className="my-5" />
          <h3>New Customer? Please create an account.</h3>
          <p>
            Your account lets you authorize and download Live plus your included
            library content.
          </p>
          <form className="col-lg-9">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control bg-light rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleInputPassword1"
                className="form-label d-flex justify-content-between"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control bg-light rounded-0"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputfirst" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control bg-light rounded-0"
                id="exampleInputfirst"
                aria-describedby="first"
                placeholder="optional"
              />
              <div id="firstHelp" className="form-text">
                So that we know what to call you if we email you.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputlast" className="form-label">
                Last Name
              </label>

              <input
                type="text"
                className="form-control bg-light rounded-0 "
                id="exampleInputlast"
                aria-describedby="last"
                placeholder="optional"
              />
            </div>
            <div className="my-3">
              <label for="exampleInputlast" className="form-label">
                Country / region
              </label>
              <select
                className="form-select bg-light rounded-0"
                aria-label="Default select example"
              >
                <option selected>Nigeria</option>
                <option value="1">Germany</option>
                <option value="2">Spain</option>
                <option value="3">Japan</option>
              </select>
            </div>

            <div className="form-check mb-5">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" for="flexCheckChecked">
                <span className="fw-semibold">
                  Sign up to the Ableton newsletter to stay up to date with the
                  latest special offers, tutorial videos, downloads, surveys and
                  other news.
                </span>
                It’s free and you can unsubscribe at any time. Further
                information is available in our Privacy Policy.
              </label>
            </div>

            <button type="submit" className="btn btn-primary mb-5 rounded-0">
              Create account
            </button>
          </form>
        </div>
      </div>
      <hr className="my-5" />
      <Footer />
    </div>
  );
}

export default Login