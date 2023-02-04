import React from "react";
import "./navbar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
            <li>Company</li>
          </ul>
        </span>

        <span className="nav-buttons">
          <button id="btn1">
            <Link to='/login'>Login</Link>
          </button>
          <button id="btn2">Sign Up</button>
        </span>
      </div>
    </>
  );
};
