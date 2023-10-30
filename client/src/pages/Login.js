import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./Auth.css"
import config from "../config";

const Login = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
      });
    
      const { email, password } = inputs;
    
      const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    
      const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { email, password };
          const response = await fetch(
            `${config.api_url}/authentication/login`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)
            }
          );
    
          const parseRes = await response.json();
    
            localStorage.setItem("token", parseRes.jwtToken);
            setAuth(true);
    
        } catch (err) {
          console.error(err.message);
        }
      };

  return (
    <Navbar>
    <Fragment>
      <div className="auth-container">
    <h1 className="auth-header">Login</h1>
    <form onSubmit={onSubmitForm}>
      <p>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={email}
        onChange={e => onChange(e)}
        className="auth-input"
      />
      </p>
      <p>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={e => onChange(e)}
        className="auth-input"
      />
      </p>
      <button className="auth-button">Submit</button>
    </form>
    <Link to="/register" className="auth-link">Make new account</Link>
    </div>
  </Fragment>
  </Navbar>
  );
};

export default Login;