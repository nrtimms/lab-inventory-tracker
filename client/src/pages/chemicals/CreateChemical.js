import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbartoo from "../../components/navbar2";
import config from "../../config";
import "./CreateUpdate.css"

const CreateChemical = ({setAuth}) => {
    let navigate = useNavigate();
  const [chem_name, setChem_name] = useState("");
  const [molar_mass, setMolar_mass] = useState("");
  const [current_amt, setCurrent_amt] = useState("");
  const [units, setUnits] = useState("");
  const [chem_loc, setChem_loc] = useState("");
  const [vendor_name, setVendor_name] = useState("");
  const [cat_num, setCat_num] = useState("");
  const [cas_num, setCas_num] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      const body = { chem_name, molar_mass, current_amt, units, chem_loc, vendor_name, cat_num, cas_num };
      const response = await fetch(`${config.api_url}/chemicals`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();

      console.log(parseResponse);

      setChem_name("");
      setMolar_mass("");
      setCurrent_amt("");
      setUnits("");
      setChem_loc("");
      setVendor_name("");
      setCat_num("");
      setCas_num("");

      navigate(`/chemicals`);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Navbartoo setAuth={setAuth}>
    <Fragment>
      <h1 className="create-update-header">Add new chemical</h1>
      <form onSubmit={onSubmitForm}>
      <p className="create-update-text">Chem Name:</p>
        <input
          type="text"
          placeholder="chemical name"
          className="create-update-input"
          value={chem_name}
          onChange={e => setChem_name(e.target.value)}
        />
        <p className="create-update-text">Molar Mass:</p>
        <input
          type="text"
          placeholder="molar mass"
          className="create-update-input"
          value={molar_mass}
          onChange={e => setMolar_mass(e.target.value)}
        />
        <p className="create-update-text">Current Amount:</p>
        <input
          type="text"
          placeholder="current amount"
          className="create-update-input"
          value={current_amt}
          onChange={e => setCurrent_amt(e.target.value)}
        />
        <p className="create-update-text">Units:</p>
        <input
          type="text"
          placeholder="units"
          className="create-update-input"
          value={units}
          onChange={e => setUnits(e.target.value)}
        />
        <p className="create-update-text">Location:</p>
        <input
          type="text"
          placeholder="chemical location"
          className="create-update-input"
          value={chem_loc}
          onChange={e => setChem_loc(e.target.value)}
        />
        <p className="create-update-text">Vendor Name:</p>
        <input
          type="text"
          placeholder="vendor name"
          className="create-update-input"
          value={vendor_name}
          onChange={e => setVendor_name(e.target.value)}
        />
        <p className="create-update-text">Category Number:</p>
        <input
          type="text"
          placeholder="cat number"
          className="create-update-input"
          value={cat_num}
          onChange={e => setCat_num(e.target.value)}
        />
        <p className="create-update-text">Cas Number:</p>
        <input
          type="text"
          placeholder="cas number"
          className="create-update-input"
          value={cas_num}
          onChange={e => setCas_num(e.target.value)}
        />
        <button className="create-update-button">Add</button>
      </form>
    </Fragment>
    </Navbartoo>
  );
};

export default CreateChemical;