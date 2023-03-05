import React from "react";
import "./navbar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [mobileNavicon, setMobileNavicon] = React.useState(false);

  return (
    <>
      <div className="navbar">
        <span className="nav-logo">
          <img src={Logo} alt="" />
          <h1>DroidPad</h1>
        </span>

        <span className="nav-links">
          <ul>
            <li>Portfolio</li>
            <li>Resources</li>
            <li>Pricing</li>
            <li>
              <Link to="/home-page">Company</Link>
            </li>
          </ul>
        </span>

       

        <span className="nav-buttons">
          <button id="btn1">
            <Link to="/login">Login</Link>
          </button>
          <button id="btn2">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </span>
      </div>

      <span className="mob-navbar">
          {mobileNavicon ? (
            <i
              onClick={() => setMobileNavicon(false)}
              className="uil uil-times"
            ></i>
          ) : (
            <i
              className="uil uil-bars"
              onClick={() => setMobileNavicon(true)}
            ></i>
          )}

          {mobileNavicon && 
            <div className="mob-div">
              <span className="nav-links">
                <ul>
                  <li>
                    <p>Portfolio</p>
                  </li>
                  <li>
                    <p>Resources</p>
                  </li>
                  <li>
                    {/* <p>Company</p> */}
                    <p><Link to="/home-page">Company</Link></p>

                  </li>
                  <li>
                    <p>Pricing</p>
                  </li>

                  <span className="nav-button">
                    <button id="btn1">
                      <Link to="/login">Login</Link>
                    </button>
                    <button id="btn2">
                      <Link to="/sign-up">Sign Up</Link>
                    </button>
                  </span>
                </ul>
              </span>
            </div>
          }
        </span>
    </>
  );
};
