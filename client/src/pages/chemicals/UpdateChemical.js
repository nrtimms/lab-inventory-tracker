import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbartoo from "../../components/navbar2";
import config from "../../config";
import "./CreateUpdate.css"

const UpdateChemical = ({setAuth}) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const [chem_name, setChem_name] = useState("");
    const [molar_mass, setMolar_mass] = useState("");
    const [current_amt, setCurrent_amt] = useState("");
    const [units, setUnits] = useState("");
    const [chem_loc, setChem_loc] = useState("");
    const [vendor_name, setVendor_name] = useState("");
    const [cat_num, setCat_num] = useState("");
    const [cas_num, setCas_num] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${config.api_url}/chemicals/${id}`, {
                    method: "GET",
                    headers: { jwt_token: localStorage.token }
                });

                const parseData = await res.json();
                console.log(parseData.data.chemicals)
                setChem_name(parseData.data.chemicals.chem_name);
                setMolar_mass(parseData.data.chemicals.molar_mass);
                setCurrent_amt(parseData.data.chemicals.current_amt);
                setUnits(parseData.data.chemicals.units);
                setChem_loc(parseData.data.chemicals.chem_loc);
                setVendor_name(parseData.data.chemicals.vendor_name);
                setCat_num(parseData.data.chemicals.cat_num);
                setCas_num(parseData.data.chemicals.cas_num);
            } catch (err) {
                console.error(err.message);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { chem_name, molar_mass, current_amt, units, chem_loc, vendor_name, cat_num, cas_num };

        const myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("jwt_token", localStorage.token);

        await fetch(`${config.api_url}/chemicals/${id}`, {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(body)
        });

        navigate('/chemicals');
    };

    return (
        <Navbartoo setAuth={setAuth}>
        <div>
                <h1 className="create-update-header">Edit chemical</h1>
                <p className="create-update-text">Chemical Name:</p>
                <div>
                    <input
                    value={chem_name}
                    onChange={(e) => setChem_name(e.target.value)}
                    type="text"
                    className="create-update-input"
                    />
                </div>
                <p className="create-update-text">Molar mass:</p>
                <div>
                    <input
                    value={molar_mass}
                    onChange={(e) => setMolar_mass(e.target.value)}
                    type="text"
                    className="create-update-input"
                    />
                </div>
                <p className="create-update-text">Current Amount:</p>
                <div>
                    <input
                    value={current_amt}
                    onChange={(e) => setCurrent_amt(e.target.value)}
                    type="text"
                    className="create-update-input"
                    />
                </div>
                <p className="create-update-text">Units:</p>
                <div>
                    <input
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                    type="text"
                    className="create-update-input"
                    />
                </div>
                <p className="create-update-text">Location:</p>
                <div>
                    <input
                    value={chem_loc}
                    onChange={(e) => setChem_loc(e.target.value)}
                    type="text"
                    className="create-update-input"
                    />
                </div>
                <p className="create-update-text">Vendor:</p>
                <div>
                    <input
                    value={vendor_name}
                    onChange={(e) => setVendor_name(e.target.value)}
                    type="text"
                    className="create-update-input"
                    />
                </div>
                <p className="create-update-text">Cat Number:</p>
                <div>
                    <input
                    value={cat_num}
                    onChange={(e) => setCat_num(e.target.value)}
                    type="text"
                    className="create-update-input"
                    />
                </div>
                <p className="create-update-text">Cas Number:</p>
                <div>
                    <input
                    value={cas_num}
                    onChange={(e) => setCas_num(e.target.value)}
                    type="text"
                    className="create-update-input"
                    />
                </div>
    <div className="create-update-padding"><button onClick={handleSubmit} type="submit" className="create-update-button">
        Save
    </button></div>
    </div> 
    </Navbartoo>        
  );
};

export default UpdateChemical;