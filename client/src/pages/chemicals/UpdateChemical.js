import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateChemical = (props) => {
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
                const res = await fetch(`http://localhost:3001/chemicals/${id}`, {
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

        await fetch(`http://localhost:3001/chemicals/${id}`, {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(body)
        });

        navigate('/chemicals');
    };

    return (
        <div>
                <h2>Chem Name:</h2>
                <div className="col">
                    <input
                    value={chem_name}
                    onChange={(e) => setChem_name(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <h2>Molar mass:</h2>
                <div className="col">
                    <input
                    value={molar_mass}
                    onChange={(e) => setMolar_mass(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <h2>Current Amount:</h2>
                <div className="col">
                    <input
                    value={current_amt}
                    onChange={(e) => setCurrent_amt(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <h2>Units:</h2>
                <div className="col">
                    <input
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <h2>Chemical Location:</h2>
                <div className="col">
                    <input
                    value={chem_loc}
                    onChange={(e) => setChem_loc(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <h2>Vendor name:</h2>
                <div className="col">
                    <input
                    value={vendor_name}
                    onChange={(e) => setVendor_name(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <h2>Cat Number:</h2>
                <div className="col">
                    <input
                    value={cat_num}
                    onChange={(e) => setCat_num(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
                <h2>Cas Number:</h2>
                <div className="col">
                    <input
                    value={cas_num}
                    onChange={(e) => setCas_num(e.target.value)}
                    type="text"
                    className="form-control"
                    />
                </div>
    <button onClick={handleSubmit} type="submit" className="btn btn-primary">
        Save
    </button>
    </div>         
  );
};

export default UpdateChemical;