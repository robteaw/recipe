import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="What's on today's menu?"
      ></input>
    </div>
  );
}
