import React, { useEffect } from "react";
import ItemProduct from "./ItemProduct";
import "./Admin.css"
import Loading from "./Loading";

const GetAllProducts = ()=> {

    useEffect(() =>{
        getAllData();
    }, []);

    const getAllData=()=>{
        fetch(`${BASE_URL}/Products/GetAll` , {
        method : "GET",
        headers : HEADERS,
        }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error.message));
    };

    return (
        <div className="loading-container">
        <Loading/>
        <div className="get-container">
         <ItemProduct/>
        </div>
        </div>
    );
}

export default GetAllProducts;