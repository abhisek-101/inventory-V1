import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <nav className="Header">
      <div className="header__left">
        <h3>
          <Link to="/dashboard">myInventory</Link>
        </h3>
      </div>
      <div className="header__right">
        <h5 style={{ marginRight: "20px" }}>
          Total earned today :{" "}
          <span style={{ fontWeight: "bolder" }}>$1200</span>
        </h5>

        <h5>Account</h5>
      </div>
    </nav>
  );
};

export default Header;
