import React from "react";
import Logo from "../assets/logo.png";
import Google from "../assets/google.png";
import Apple from "../assets/apple.png";
import { Link } from "react-router-dom";
import "./signup.css";
 import Ellipse from '../assets/ellipse1.png'
import Component from '../assets/component.png'
import Ccard from '../assets/creditcard.png'



export const SignUp = () => {
    return (
      <>
        <div>
          <div className="login-container signup-container">
            <div className="container-one one-b">
              <span className="ellipse">
                <img src={Ellipse} alt=''/>
              </span>

              <span className="compo">
                <img src={Component} alt=''/>
              </span>
  
              <span className="crecard">
                <img src={Ccard} alt=""/>
              </span>
            </div>
  
            <div className="container-logo">
              <img src={Logo} alt="logo" />
              <h2>DroidPad</h2>
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
  