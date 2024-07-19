import React from "react";
import "./index.scss";
import jamcake from "../../assets/images/jamcake.jpg";
import friedrice from "../../assets/images/friedrice.jpg";
import tortillasoup from "../../assets/images/tortillasoup.jpg";

function index() {
  return (
    <div className="home">
      <h2>Top Picks</h2>
      <div className="imgSet">
        <div className="imgContainer">
          <img src={jamcake} alt="" className="" />
          <h4>Strawberry Jam Coffee Cake</h4>
        </div>
        <div className="imgContainer">
          <img src={friedrice} alt="" className="" />
          <h4>Fried Rice</h4>
        </div>
        <div className="imgContainer">
          <img src={tortillasoup} alt="" className="" />
          <h4>Mexican Tortilla Chicken Soup</h4>
        </div>
      </div>
    </div>
  );
}

export default index;
