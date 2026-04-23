import React, { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import "./GetAllProducts.css"
import Loading from "../Loading";
import { Link } from "react-router-dom";
import axios from "axios";

const GetAllProducts = ()=> {

    const [listProducts,setListProducts] = useState([]);
    const [isShowLoading, setIsShowLoading] = useState(true);
    useEffect(()=> {
        getAllData();
    },[]);

    const getAllData = () => {
        axios
        .get(`/products`)
        .then((response)=> {setListProducts(response) , setIsShowLoading(false)})
        .catch((error) => {console.log(error.message)} , setIsShowLoading(false));
    };

    return (
        <div className="search-container">
            <div className="search-buttons-container">
                 <input placeholder="Type SomeThing in Here..." className="search-box"/>
                 <button>SORT By...</button>
                 <Link  target="_blank" to="/AddProduct">
                 <button>+</button>
                 </Link>
            </div>
        <div className="loading-container">
            {isShowLoading && <Loading/>}
        <div className="get-container">
        {
            listProducts.map(element => <ItemProduct key={element.id} data={element}/>)
        }
        </div>
        </div>
        </div>
    );
}
export default GetAllProducts;