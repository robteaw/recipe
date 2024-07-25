import React from "react";
import "./index.scss";
import PickCard from "../../components/PickCard/PickCard";

function index() {
  return (
    <div className="home">
      <h2>Top Picks</h2>
      <PickCard />
    </div>
  );
}

export default index;
