import React, { Fragment, useState } from "react";

const CreateChemical = () => {
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
      const response = await fetch("http://localhost:3001/chemicals", {
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
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={chem_name}
          onChange={e => setChem_name(e.target.value)}
        />
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={molar_mass}
          onChange={e => setMolar_mass(e.target.value)}
        />
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={current_amt}
          onChange={e => setCurrent_amt(e.target.value)}
        />
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={units}
          onChange={e => setUnits(e.target.value)}
        />
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={chem_loc}
          onChange={e => setChem_loc(e.target.value)}
        />
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={vendor_name}
          onChange={e => setVendor_name(e.target.value)}
        />
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={cat_num}
          onChange={e => setCat_num(e.target.value)}
        />
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={cas_num}
          onChange={e => setCas_num(e.target.value)}
        />
        <button className="btn btn-success ">Add</button>
      </form>
    </Fragment>
  );
};

export default CreateChemical;