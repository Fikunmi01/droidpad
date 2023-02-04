import React from "react";
import Bagicon from "../assets/bagicon.png";
import "./cardcomponent.css";

export const Cardcomp = () => {
  return (
    <>
      <div className="card">
        <div
          className="icon"
          style={{
            borderRadius: `50%`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: `3.1rem`,
            height: `3.1rem`,
            backgroundColor: `#87FF4F`,
          }}
        >
          <img src={Bagicon} alt="" />
        </div>

        <h2>Revenue</h2>
        <p className="light-p">Total Arm Band Generated the last 30 days</p>

        <p className="amount">$3,500,345</p>
        <div className="progress-div">
          <div className="progress-value" style={{}}></div>
        </div>
        <span
          style={{ display: "flex", justifyContent: "space-between" }}
          className="barflex"
        >
          <p id="one">64%</p>
          <p id="two">$2M</p>
        </span>
      </div>
    </>
  );
};

export const Creditcard = () => {
  return (
    <>
      <div className="c-card">
        <span className="c-holder">
          <p>Card Holder</p>
          <h2>Jharzee Gram</h2>
        </span>

        <span className="c-number">
            <p>1234 5678 9000 3456</p>
        </span>
        <div className="c-details">
            <span className="c-expiry">
                <div></div>
                <p>12|24</p>
            </span>

            <span className="c-cardtype">
                <div className="ellipse">
                    <div className="ellipse-one"></div>
                    <div className="ellipse-two"></div>
                </div>
                <p>VISA</p>
            </span>
        </div>
      </div>
    </>
  );
};
