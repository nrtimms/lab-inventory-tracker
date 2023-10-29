import React from "react";
import Navbar from "../components/navbar";

const Landing = () => {
  return (
    <Navbar>
    <div className="jumbotron mt-5">
      <h1>Track your chemicals!</h1>
      <p>Sign In and track your chemical library</p>
    </div>
    </Navbar>
  );
};

export default Landing;