import React from "react";
import ProductDetail from "../Components/ProductDetail";
import Header from "../Components/Header";
import "./Home.scss";

const Product = () => {
  return (
    <div className="home-container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <ProductDetail />
      </div>
    </div>
  );
};

export default Product;
