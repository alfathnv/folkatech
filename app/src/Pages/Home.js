import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return <div>Home</div>;
};

export default Home;
