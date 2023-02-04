import React from "react";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: `#1F311D`, height: `100vh`,position:'relative',overflow:'hidden' }}>
      <Navbar />
      <Hero/>
    </div>
  );
}
