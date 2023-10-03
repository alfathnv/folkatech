import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./Main.scss";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:5000/products";
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: token,
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product list:", error);
      });
  }, []);

  return (
    <div className="main-container">
      {products.map((data, id) => (
        <Card
          key={id}
          image={data.image}
          name={data.name}
          store={data.store}
          rating={data.rating}
          ratingCount={data.rating_count}
          price={data.price}
          description={data.description}
          onDetail={() => (window.location.href = `/product/${id}`)}
        />
      ))}
    </div>
  );
};

export default Main;
