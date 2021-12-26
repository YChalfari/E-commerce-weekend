import React from "react";
import "./style.css";
import hero from "../../images/tamanna-rumee-eD1RNYzzUxc-unsplash.jpg";
const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${hero})` }} className="hero">
      <h1 className="hero-title">Welcome to my store</h1>
    </div>
  );
};

export default Home;
