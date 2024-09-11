import React from "react";
import "./Products.css";
import product_1 from "../../assets/product-1.png";
import product_icon_1 from "../../assets/product-icon-1.png";

const Products = () => {
  return (
    <div className="products">
      <div className="product">
        <img src={product_1} alt="" />
        <div className="caption">
          <img src={product_icon_1} alt="" />
          <p>Teluk Bebek</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
