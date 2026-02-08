import React from "react";
import MobileItems from "../../data/MobileProductsdata";
import  './Header.css';
function MobileProducts() {
  const brands = MobileItems.filter(item => ["Select Mobile","Apples phones","Different mobile phone brands","Top Brands"].includes(item.Category));
  const prices = MobileItems.filter(item => ["Smartphones by price","Smartphones by Performance","Smartphones by Internal Storage","Image Resolution"].includes(item.Category));
  const accessories = MobileItems.filter(item => ["Mobile Accessories","Mobile Case","Headphone","Intelligent Smartwatch and Bracelet","Apple Watch"].includes(item.Category));
  const others=MobileItems.filter(item => item.Category === "Hottest 🔥");

  return (
    <div className="mobile-items">
      <div className="column">
        {brands.map((cat, i) => (
          <div key={i} className="category">
            <h3><span>|</span>{cat.Category}</h3>
            <ul>
              {cat.Items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="column">
        {prices.map((cat, i) => (
          <div key={i} className="category">
             <h3><span>|</span>{cat.Category}</h3>
            <ul>
              {cat.Items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="column">
        {accessories.map((cat, i) => (
          <div key={i} className="category">
             <h3><span>|</span>{cat.Category}</h3>
            <ul>
              {cat.Items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

       <div className="column">
        {others.map((cat, i) => (
          <div key={i} className="category">
             <h3><span>|</span>{cat.Category}</h3>
            <ul>
              {cat.Items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}

export default MobileProducts;
