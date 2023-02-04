import React from "react";
import { Cardcomp, Creditcard } from "./cardcomponent";

export default function CardSect() {
  return (
    <>
      <div
        style={{
          height: `50rem`,
          width: `50rem`,
          borderRadius: `50%`,
          border: `0.1rem solid #fff`,
          display: `inlineBlock`,
        }}
      >
        <span style={{ position: "relative", top: `30%`, right: `10%` }}>
          <Cardcomp />
        </span>

      </div>
    </>
  );
}
