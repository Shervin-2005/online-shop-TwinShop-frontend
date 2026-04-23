import React, { use, useState } from "react";
import "./AddProduct.css"
import axios from "axios";

const AddProduct = ()=> {

    const [inputValue , setInputValue]=useState({
        title:"",
        category:"",
        brand:"",
        describtion:"",
        price:"",
        prePrice:"",
        image:"",
    });

    //let formData = new FormData();

    const onInputChange = event => {
        switch (event.target.name) {
            case "title":
                setInputValue({...inputValue , title : event.target.value});
                //formData.append("title",event.target.value);
                break;
                  case "category":
                setInputValue({...inputValue , category : event.target.value});
                //formData.append("category",event.target.value);
                break;
                  case "brand":
                setInputValue({...inputValue , brand : event.target.value});
                //formData.append("brand",event.target.value);
                break;
                  case "describtion":
                setInputValue({...inputValue , describtion : event.target.value});
                //formData.append("describtion",event.target.value);
                break;
                case "price":
                setInputValue({...inputValue , price : event.target.value});
                //formData.append("price",event.target.value);
                break;
                case "prePrice":
                setInputValue({...inputValue , prePrice : event.target.value});
                //formData.append("PrePrice",event.target.value);
                break;
                case "file":
                setInputValue({...inputValue , image : event.target.files[0]});
                //formData.append("image",event.target.files[0]);
                break;
        
            default:
                break;
        }
    }

    const postData = (event) => {
        event.preventDefault();

        axios.post(`/products` , inputValue).then((response)=> console.log(response))
        .catch((error) => {console.log(error.message)});

        /*axios.post(`/products` , formData , {headers : {"Content-Type" : "multipart/form-data"}}).then((response)=> console.log(response))
        .catch((error) => {console.log(error.message)});*/
    };

    return (
       <div className="add-container" onSubmit={postData}>
           <h3>Add Product</h3>
           <form>
            <input value={inputValue.title} onChange={onInputChange} type="text" placeholder="Title" name="title"/>
            <input value={inputValue.category} onChange={onInputChange} type="text" placeholder="Category" name="category"/>
            <input value={inputValue.brand} onChange={onInputChange} type="text" placeholder="Brand" name="brand"/>
            <input value={inputValue.describtion} onChange={onInputChange} type="text" placeholder="Describtion" name="describtion"/>
            <div className="price-container">
                    <input value={inputValue.prePrice} onChange={onInputChange} type="number" placeholder="Initial Price" name="Preprice"/>
                 <div className="checkbox-container">
                        <input type="checkbox" id="offerCheckbox" name="offer"/>
                        <label>Offer</label>
            </div>
            </div>
            <input value={inputValue.price} onChange={onInputChange} type="number" placeholder="Secondary Price" name="price"/>
            <input onChange={onInputChange} type="file" text="Main Image" name="file"/>
            <input onChange={onInputChange} type="file" text="Side Images" name="file"/>
            {inputValue.title && inputValue.category && inputValue.describtion && inputValue.price && inputValue.image
            && <button className="submit-button" type="submit">Add Product</button>}
           </form>
        </div>
    );
}

export default AddProduct;