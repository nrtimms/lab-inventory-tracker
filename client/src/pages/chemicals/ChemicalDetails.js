import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbartoo from "../../components/navbar2";
import config from "../../config";
import "./ChemicalDetails.css"


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
        <div className="details-container">
            <div className="details-left">
            <h1 className="chem-name">{selectedChemical.chem_name}</h1>
            <img src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201706/MIT-Predicting-Reactions-1_0.jpg?itok=q5Dlcw3w" alt="chem photo" className="details-photo"></img>
            <div>
            <div className="details-padding"><button className="details-button" onClick={(e) => handleUpdate(e, selectedChemical.chem_id)}>Edit</button></div>
            <div className="details-padding"><button className="details-button" onClick={(e) => handleDelete(e, selectedChemical.chem_id)}>Delete</button></div>
            </div>
            </div>
            <div className="details-right">
            <div className="chem-details"><p className="detail-headers">Molar mass</p><p className="details">: {selectedChemical.molar_mass} g/mol</p></div>
            <div className="chem-details"><p className="detail-headers">Current amount</p><p className="details">: {selectedChemical.current_amt} {selectedChemical.units}</p></div>
            <div className="chem-details"><p className="detail-headers">Location</p><p className="details">: {selectedChemical.chem_loc}</p></div>
            <div className="chem-details"><p className="detail-headers">Vendor</p><p className="details">: {selectedChemical.vendor_name}</p></div>
            <div className="chem-details"><p className="detail-headers">Cat number</p><p className="details">: {selectedChemical.cat_num}</p></div>
            <div className="chem-details"><p className="detail-headers">Cas number</p><p className="details">: {selectedChemical.molar_mass}</p></div>
            </div>
        </div>
        </Navbartoo>
    )
};

export default ChemicalDetails;