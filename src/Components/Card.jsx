import React from "react";
import "./css/Card.css";
const Card = ({ title, value, style }) => {
  return (
    <section className="card" style={{ backgroundColor: "#1cd487" }}>
      <section className="value">
        <span style={{ color: "white", fontWeight: "bolder" }}>{value}</span>
      </section>
      <section className="title">
        <span style={{ color: "white" }}>{title}</span>
      </section>
    </section>
  );
};

export default Card;
