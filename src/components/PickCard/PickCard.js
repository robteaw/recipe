import React from "react";
import "./PickCard.scss";
import jamcake from "../../assets/images/jamcake.jpg";
import friedrice from "../../assets/images/friedrice.jpg";
import tortillasoup from "../../assets/images/tortillasoup.jpg";

export default function PickCard() {
  const pick = [
    { image: jamcake, name: "Strawberry Jam Coffee Cake" },
    { image: friedrice, name: "Fried Rice" },
    { image: tortillasoup, name: "Mexican Tortilla Chicken Soup" },
  ];

  return (
    <div className="cardSet">
      {pick.map((item) => {
        return (
          <div className="card">
            <img src={item.image} alt={item.name} className="image" />
            <h4 className="name">{item.name}</h4>
          </div>
        );
      })}
    </div>
  );
}
