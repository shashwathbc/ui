import React from "react";
import About from "./about";
import Experiance from "./experiance";

const HomePage = () => {
  return (
    <div className="homePage">
      {/* About */}
      <About />

      {/* EXPERIANCE */}
      <Experiance />
    </div>
  );
};

export default HomePage;
