import React from "react";
import Ellipse from '../assets/ellipse1.png'
import Component from '../assets/component.png'
import Ccard from '../assets/creditcard.png'
import { Creditcard } from "./cardcomponent";
import "./hero.css";
import CardSect from "./sectImg";

export const Hero = () => {
  return (
    <> 
      <div className="hero">
        <div className="section-one">
          <span className="it1">
            <p>
              Payment card to <span style={{ color: `#87FF4F` }}>grow</span>{" "}
              your <span className="underline">business</span>
            </p>
          </span>

          <p className="it2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et odio
            morbi magna proin purus. Tellus in ornare.
          </p>

          <button className="it3">Request Demo</button>
        </div>

        <div className="section-two">
          <div style={{display:'flex',alignItems:'center'}}>
            <img className="ell" src={Ellipse} alt=""/>
            <img className="compo" src={Component} alt=""/>
            <img className="cac" src={Ccard} alt=""/>
          </div>
          
        </div>
      </div>
    </>
  );
};
