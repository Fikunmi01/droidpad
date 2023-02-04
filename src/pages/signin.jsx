import React from "react";
import Logo from "../assets/logo.png";

export const Login = () => {
  return (
    <>
      <div>
        <div>
          <img src={Logo} alt="logo" />
          <h2>Droidpad</h2>
        </div>

        <div>
          <span>
            <h2>Welcome back</h2>
            <p>Sign in to continue with Droidpad</p>
          </span>

          <span>
            <label htmlFor="email or username">EMAIL OR USERNAME</label>
            <input type='email' placeholder="futurelabs@gmail.com"/>
          </span>
        </div>
      </div>
    </>
  );
};
