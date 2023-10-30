import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./Auth.css"
import config from "../config";

const Register = ({ setAuth }) => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    const { email, password, name } = inputs;

    const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { email, password, name };
            const response = await fetch(
                `${config.api_url}/authentication/register`,
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
            <h1 className="auth-header">Sign Up</h1>
            <form onSubmit={onSubmitForm}>
                <p>
                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={e => onChange(e)}
                    className="auth-input"
                />
                </p>
                <p>
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={e => onChange(e)}
                    className="auth-input"
                />
                </p>
                <p>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="name"
                    onChange={e => onChange(e)}
                    className="auth-input"
                />
                </p>
                <button className="auth-button">Submit</button>
            </form>
            <Link to="/login" className="auth-link">Already have an account? Login</Link>
            </div>
        </Fragment>
        </Navbar>
    );
};

export default Register;