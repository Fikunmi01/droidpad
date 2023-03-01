import React from "react";
import Logo from "../assets/logo.png";
import Google from "../assets/google.png";
import Apple from "../assets/apple.png";
import { Link } from "react-router-dom";
import "./signin.css";
import { Cardcomp } from "../components/cardcomponent";

export const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="container-one">
          <img src={Logo} alt="logo" />
          <h2>Droidpad</h2>
        </div>

        <div className="container-two">
          <div className="heading">
            <h2>Welcome back</h2>
            <p>Sign in to continue with Droidpad</p>
          </div>

          <div className="signin-form">
            <span className="email-label">
              <label htmlFor="email or username">EMAIL OR USERNAME</label>
              <input type="email" placeholder="futurelabs@gmail.com" />
              <input
                className="password-field"
                type="password"
                placeholder="Password"
              />
            </span>

            <div className="checkbox-div">
              <span className="checkbox-flex">
                <input type="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
              </span>

              <span>
                <Link className="forgot-link" to="/">FORGOT PASSWORD</Link>
              </span>
            </div>
          </div>

          <div className="btn">
            <button className="login-btn">LOGIN</button>

            <p>OR</p>
            <button className="google-btn">
              <img src={Google} alt="google icon" />
              LOGIN WITH GOOGLE
            </button>
            <button className="apple-btn">
              <img src={Apple} alt="apple icon " />
              LOGIN WITH APPLE
            </button>
          </div>
          <p className="signup-cta" id="signup-cta">
            Don't have an account. <span>REGISTER HERE</span>
          </p>
        </div>
      </div>
    </>
  );
};

export const CreateAccount = () => {
  return (
    <>
      <div>
        <div className="login-container signup-container">
          <div className="container-one one-b">
            <div className="ellipse-b"></div>

            <span style={{ position: "relative", right: `20rem` }}>
              <Cardcomp />
            </span>
          </div>

          <div className="container-logo">
            <img src={Logo} alt="logo" />
            <h2 style={{ fontSize: `2.5rem` }}>DroidPad</h2>
          </div>

          <div className="container-two two-b">
            <div className="heading heading-b">
              <h2>Create an Account</h2>
              <p>Start with our 30 day free trial</p>
            </div>

            <div className="signin-form">
              <span className="email-label">
                <label htmlFor="email or username">EMAIL OR USERNAME</label>
                <input type="email" placeholder="futurelabs@gmail.com" />
                <input id="name" type="text" placeholder="Name" />

                <input
                  className="password-field"
                  type="password"
                  placeholder="Password"
                />
              </span>

              <div className="checkbox-div">
                <span className="checkbox-flex">
                  <input type="checkbox" />
                  <label htmlFor="checkbox">Remember me</label>
                </span>

                <>
                  <Link to="/">FORGOT PASSWORD</Link>
                </>
              </div>
            </div>

            <div className="btn">
              <button className="login-btn">SIGN UP</button>
              <p>OR</p>
              <button className="google-btn">
                <img src={Google} alt="google icon" />
                SIGN UP WITH GOOGLE
              </button>
              <button className="apple-btn">
                <img src={Apple} alt="apple icon " />
                SIGN UP WITH APPLE
              </button>
            </div>
            <p className="signup-cta">
              Already have an account. <span>LOGIN</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
