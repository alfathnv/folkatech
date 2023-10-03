import React, { useEffect } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="home-container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

export default Home;
