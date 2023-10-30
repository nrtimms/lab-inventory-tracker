import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbartoo from "../../components/navbar2";
import config from "../../config"

const ListChemicals = ({ setAuth }) => {
    let navigate = useNavigate();
    const [chemicals, setChemicals] = useState("");

    const getProfile = async () => {
        try {
            const res = await fetch(`${config.api_url}/chemicals/`, {
                method: "GET",
                headers: { jwt_token: localStorage.token }
            });

            const parseData = await res.json();
            console.log(parseData.data.chemicals)
            setChemicals(parseData.data.chemicals);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleNew = (e) => {
        e.stopPropagation();
        navigate(`/chemicals/create`);
    };

    const handleChemicalSelect = (id) => {
        navigate(`/chemicals/${id}`);
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <Navbartoo setAuth={setAuth}>
        <div>
            <h1>Chemical Library</h1>
            <div>
                {chemicals && chemicals.map((chem) => (
                    <div>
                        <p onClick={() => handleChemicalSelect(chem.chem_id)}>{chem.chem_name}</p>
                        <p>{chem.molar_mass}</p>
                        <p>{chem.current_amt}</p>
                        <p>{chem.units}</p>
                        <p>{chem.chem_loc}</p>
                        <p>{chem.vendor_name}</p>
                        <p>{chem.cat_num}</p>
                        <p>{chem.cas_num}</p>
                    </div>
                ))}
            </div>
            <button onClick={e => handleNew(e)} className="btn btn-primary">
                New
            </button>
        </div>
        </Navbartoo>
    );
 };

export default ListChemicals;