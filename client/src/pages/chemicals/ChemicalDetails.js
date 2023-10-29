import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ChemicalDetails = () => {
    let navigate = useNavigate();
    const { id } = useParams()
    const [ selectedChemical, setSelectedChemical ] = useState("");

    const getChemical = async () => {
        try {
            const res = await fetch(`http://localhost:3001/chemicals/${id}`, {
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


    // const handleDelete = async (e, id) => {
    //     e.stopPropagation();
    //     try {
    //         const response = await ClothingFetch.delete(`/${id}`);
    //         console.log(response);
    //         navigate(`/viewitems`);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // const handleUpdate = (e, id) => {
    //     e.stopPropagation();
    //     navigate(`/viewitems/${id}/update`);
    // };


    return (
        <div className="item-details">
            <h1>{selectedChemical.chem_name}</h1>
            {/* <img className="center" src={selectedClothing.photo} alt='Photo Not Working' height="300px"/>
            <h2>Color:</h2>
            <div>{selectedClothing.color}</div>
            <h2>Category:</h2>
            <div>{selectedClothing.category}</div>
            <button className="center" onClick={(e) => handleUpdate(e, selectedClothing.clothing_id)}>Edit</button>
            <button className="center" onClick={(e) => handleDelete(e, selectedClothing.clothing_id)}>Delete</button> */}
        </div>
    )
};

export default ChemicalDetails;