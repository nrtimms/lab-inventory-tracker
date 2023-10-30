import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbartoo from "../../components/navbar2";
import config from "../../config";


const ChemicalDetails = ({setAuth}) => {
    let navigate = useNavigate();
    const { id } = useParams()
    const [ selectedChemical, setSelectedChemical ] = useState("");

    const getChemical = async () => {
        try {
            const res = await fetch(`${config.api_url}/chemicals/${id}`, {
                method: "GET",
                headers: { jwt_token: localStorage.token }
            });

            const parseData = await res.json();
            console.log(parseData.data.chemicals)
            setSelectedChemical(parseData.data.chemicals);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getChemical();
    }, []);


    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            await fetch(`${config.api_url}/chemicals/${id}`, {
              method: "DELETE",
              headers: { jwt_token: localStorage.token }
            });
            navigate(`/chemicals`)
          } catch (err) {
            console.error(err.message);
          }
    };

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/chemicals/${id}/update`);
    };


    return (
        <Navbartoo setAuth={setAuth}>
        <div className="item-details">
            <h1>{selectedChemical.chem_name}</h1>
            <h2>{selectedChemical.molar_mass}</h2>
            <h2>{selectedChemical.current_amt}</h2>
            <h2>{selectedChemical.units}</h2>
            <h2>{selectedChemical.chem_loc}</h2>
            <h2>{selectedChemical.vendor_name}</h2>
            <h2>{selectedChemical.cat_num}</h2>
            <h2>{selectedChemical.cas_num}</h2>
            <button className="btn btn-primary" onClick={(e) => handleUpdate(e, selectedChemical.chem_id)}>Edit</button>
            <button className="btn btn-primary" onClick={(e) => handleDelete(e, selectedChemical.chem_id)}>Delete</button>
        </div>
        </Navbartoo>
    )
};

export default ChemicalDetails;