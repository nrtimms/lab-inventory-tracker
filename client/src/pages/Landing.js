import React from "react";
import Navbar from "../components/navbar";
import "./Landing.css"

const Landing = () => {
  return (
    <Navbar>
    <div className="landing">
      <h1 className="landing-h1">Chem<img src="https://i.imgur.com/wFTx83n.png" className="landing-title"></img>: Chemical Inventory Tracker</h1>

      <p className="landing-p">Sign in and track accurate amounts and locations of your chemicals!</p>
    </div>
    </Navbar>
  );
};

export default Landing;