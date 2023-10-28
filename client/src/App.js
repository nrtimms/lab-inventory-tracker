import React, { Fragment, useState, useEffect } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

//components
//import Dashboard from "./components/chemicals/ListChemicals";
import Login from "./components/Login";
import Register from "./components/Register";

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
      <div className="container">
      <Routes>
        <Route path = "/login" Component = {props => !isAuthenticated ? (<Login {...props} setAuth={setAuth} />) : (<Navigate to="/dashboard"/>) } />
        <Route path = "/register" Component = {props => !isAuthenticated ? (<Register {...props} setAuth={setAuth} />) : (<Navigate to="/login"/>)} />
      </Routes>
      </div>
    </Router>
  </Fragment>;
}

export default App;

