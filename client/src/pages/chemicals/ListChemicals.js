import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbartoo from "../../components/navbar2";
import config from "../../config"
import "./ListChemicals.css"

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
                <h1 className="list-header">Chemical Library!</h1>
                <button onClick={e => handleNew(e)} className="list-button">
                    New
                </button>
                <div>
                    <table className="list-table">
                        <tr>
                            <th>Chem Name</th>
                            <th>Current Amount</th>
                            <th>Units</th>
                            <th>Location</th>
                        </tr>
                        {chemicals && chemicals.map((chem) => (
                            <tr>
                                <td onClick={() => handleChemicalSelect(chem.chem_id)}>{chem.chem_name}</td>
                                <td>{chem.current_amt}</td>
                                <td>{chem.units}</td>
                                <td>{chem.chem_loc}</td>
                            </tr>

                        ))}
                    </table>
                </div>
            </div>
        </Navbartoo>
    );
};

export default ListChemicals;