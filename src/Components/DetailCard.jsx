import React from "react";
import "./css/DetailCard.css";
import { hid } from "../data.js";
const DetailCard = ({ title, leftT, rightT }) => {
  return (
    <div className="detailCard">
      <div className="detailCard__title">{title}</div>
      <div className="detailCard__items">
        <ul>
          <li className="list">
            <h5>{leftT}</h5>
            <h5>{rightT}</h5>
          </li>
          {hid.map((value, index) => {
            return (
              <li className="list" key={index}>
                <h5>{value.item}</h5>
                <h5>{value.qty}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DetailCard;
