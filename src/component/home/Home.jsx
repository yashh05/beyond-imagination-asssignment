import React from "react";
import Sidebar from "../sidebar/sidebar";
import Chart from "../chart/Chart";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="content-container">
        <Chart />
      </div>
    </div>
  );
};

export default Home;
