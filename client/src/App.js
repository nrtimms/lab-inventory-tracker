import React, { Fragment, useState, useEffect } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

//components
import Landing from "./pages/Landing";
import ListChemicals from "./pages/chemicals/ListChemicals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateChemical from "./pages/chemicals/CreateChemical";
import ChemicalDetails from "./pages/chemicals/ChemicalDetails";
import UpdateChemical from "./pages/chemicals/UpdateChemical";
import Navbar from "./components/navbar";
import Navbartoo from "./components/navbar2";

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:3001/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  return <Fragment>
    <Router>
      <Routes>
        <Route path = "/" Component = {props => !isAuthenticated ? (<Landing {...props} />) : (<Navigate to="/chemicals" />) } />
        <Route path = "/login" Component = {props => !isAuthenticated ? (<Login {...props} setAuth={setAuth} />) : (<Navigate to="/chemicals"/>) } />
        <Route path = "/register" Component = {props => !isAuthenticated ? (<Register {...props} setAuth={setAuth} />) : (<Navigate to="/login"/>)} />
        <Route path = "/chemicals" Component = {props => isAuthenticated ? (<ListChemicals {...props} setAuth={setAuth} />) : (<Navigate to="/login"/>)} />
        <Route path = "/chemicals/create" Component = {props => isAuthenticated ? (<CreateChemical {...props} setAuth={setAuth} />) : (<Navigate to="/login"/>)}/>
        <Route path = "/chemicals/:id" Component = {props => isAuthenticated ? (<ChemicalDetails {...props} setAuth={setAuth} />) : (<Navigate to="/login"/>)} />
        <Route path = "chemicals/:id/update" Component = {props => isAuthenticated ? (<UpdateChemical {...props} setAuth={setAuth} />) : (<Navigate to="/login"/>)} />
      </Routes>
    </Router>
  </Fragment>;
}

export default App;

