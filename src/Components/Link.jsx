import React from "react";
import "./css/Link.css";

const Link = ({ title }) => {
  return (
    <div className="link">
      <h5>{title}</h5>
    </div>
  );
};

export default Link;
