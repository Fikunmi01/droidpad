import React from "react";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import './landingpage.css'

export default function LandingPage() {
  return (
    <div className="landingpagestyle">
      <Navbar />
      <Hero/>
    </div>
  );
}
