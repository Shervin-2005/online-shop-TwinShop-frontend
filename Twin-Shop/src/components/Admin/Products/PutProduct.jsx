import React, { useState } from "react";
import ".././Admin.css"
import "./EditProduct.css"
import axios from "axios";

const PutProduct = ()=> {

    const [inputValue , setInputValue]=useState({
            id:"",
            title:"",
            category:"",
            brand:"",
            describtion:"",
            price:"",
            prePrice:"",
            image:"",
        });

    const onInputChange = event => {
        switch (event.target.name) {
            case "title":
                setInputValue({...inputValue , title : event.target.value});
                break;
                  case "category":
                setInputValue({...inputValue , category : event.target.value});
                break;
                  case "brand":
                setInputValue({...inputValue , brand : event.target.value});
                break;
                  case "describtion":
                setInputValue({...inputValue , describtion : event.target.value});
                break;
                case "price":
                setInputValue({...inputValue , price : event.target.value});
                break;
                case "prePrice":
                setInputValue({...inputValue , prePrice : event.target.value});
                break;
                case "file":
                setInputValue({...inputValue , image : event.target.files[0]});
                break;
        
            default:
                break;
        }
    }

    const putData = (event) => {
        event.preventDefault();

        axios.put(`/products/${inputValue.id}` , inputValue).then((response)=> console.log(response))
        .catch((error) => {console.log(error.message)});
    };

    return (
       <div className="put-container" onSubmit={putData}>
           <h3>Edit Product</h3>
           <form>
            <input onChange={onInputChange} value={inputValue.title} type="text" placeholder="Title" name="title"/>
            <input onChange={onInputChange} value={inputValue.category} type="text" placeholder="Category" name="category"/>
            <input onChange={onInputChange} type="text" value={inputValue.brand} placeholder="Brand" name="brand"/>
            <input onChange={onInputChange} type="text" value={inputValue.describtion} placeholder="Describtion" name="describtion"/>
            <div className="price-container">
                    <input onChange={onInputChange} type="number" value={inputValue.prePrice} placeholder="Initial Price" name="price"/>
                 <div className="checkbox-container">
                        <input type="checkbox" id="offerCheckbox" name="offer"/>
                        <label for="offerCheckbox">Offer</label>
            </div>
            </div>
            <input onChange={onInputChange} type="number" value={inputValue.price} placeholder="Secondary Price" name="price"/>
            <input onChange={onInputChange} type="file" text="Main Image" name="file"/>
            <input onChange={onInputChange} type="file" text="Side Images" name="file"/>
             {inputValue.title && inputValue.category && inputValue.describtion && inputValue.price && inputValue.image &&
            <button className="submit-button" type="submit">Edit Product</button>}
           </form>
        </div>
    );
}

export default PutProduct;