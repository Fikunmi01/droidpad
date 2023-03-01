import React from "react";
import { Cardcomp } from "./cardcomponent";
import './sectImg.css';

export default function CardSect() {
  return (
    <>
      <div
      className="credit-card-circle"
      
      >
        <span style={{ position: "relative", top: `30%`, right: `10%` }}>
          <Cardcomp />
        </span>
      </div>
    </>
  );
}
