import React from "react";
import "./css/TransactionCard.css";
import { data2 } from "./data2";

const TransactionCard = ({ title, time, qtySold, totalEarned, totalTrans }) => {
  return (
    <div className="transactionCard">
      <div className="transactionCard__title">{title}</div>
      <div className="transactionCard__items">
        <ul>
          <li className="list">
            <h5 style={{ flex: ".5" }}>{time}</h5>
            <h5 style={{ flex: ".15" }}>{qtySold}</h5>
            <h5 style={{ flex: ".15" }}>{totalTrans}</h5>
            <h5 style={{ flex: ".2" }}>{totalEarned}</h5>
          </li>
          {data2.map((value, index) => {
            return (
              <li className="list" key={index}>
                <h5 style={{ flex: ".5" }}>{value.time}</h5>
                <h5 style={{ flex: ".15" }}>{value.qtySold}</h5>
                <h5 style={{ flex: ".15" }}>{value.totalTrans}</h5>
                <h5 style={{ flex: ".2" }}>{value.totalEarned}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TransactionCard;
