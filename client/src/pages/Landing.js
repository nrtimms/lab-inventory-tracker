import React from "react";
import Navbar from "../components/navbar";
import "./Landing.css"

const Landing = () => {
  return (
    <Navbar>
    <div className="landing">
      <h1 className="landing-h1">Track your chemicals!</h1>
      <p className="landing-p">Sign In and track accurate amounts and locations of your chemicals!</p>
    </div>
    </Navbar>
  );
};

export default Landing;