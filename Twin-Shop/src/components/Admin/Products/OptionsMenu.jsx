import React, { useEffect, useState } from "react";
import "./ItemProduct.css"
import { Link } from "react-router-dom";
import axios from "axios";

const OptionsMenu = ()=> {

    const [inputValue , setInputValue] = useState("");

    const deleteData = event =>{
        event.preventDefault();

        axios.delete(`/products/${inputValue.id}`).then((response)=> console.log(response))
        .catch((error) => {console.log(error.message)});;
    }

    return (
        <div className="options-menu">
            <Link to="/PutProduct"  target="_blank">
                <button style={{ borderBottom: '1px solid black' }}>Edit</button>
            </Link>
            <Link>
                <button onClick={deleteData}>Delete</button>
            </Link>
        </div>
    );
}

export default OptionsMenu;