import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";

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
            "http://localhost:3001/authentication/login",
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
    <h1 className="mt-5 text-center">Login</h1>
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={email}
        onChange={e => onChange(e)}
        className="form-control my-3"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={e => onChange(e)}
        className="form-control my-3"
      />
      <button>Submit</button>
    </form>
    <Link to="/register">Make new account</Link>
  </Fragment>
  </Navbar>
  );
};

export default Login;