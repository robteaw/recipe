import React from "react";
import "./index.scss";
import PickCard from "../../components/PickCard/PickCard";

function index() {
  return (
    <div className="home">
      <div className="hero">
        <h2>
          <span>Simple recipes to delicious food</span>
        </h2>
      </div>
      <h1>Top Picks</h1>
      <PickCard />
    </div>
  );
}

export default index;
