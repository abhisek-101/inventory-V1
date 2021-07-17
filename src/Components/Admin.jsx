import React from "react";
import "./css/Admin.css";
import Footer from "./Footer";
const Admin = () => {
  return (
    <div className="wrapper">
      <section className="admin">
        <h4>admin section</h4>

        <button onClick={() => alert("No more admin allowed!")}>
          Add New Admin
        </button>

        <div className="admin__table">
          <h4>Administrator accounts</h4>
          <ul>
            <li className="admin__list">
              <h5 style={{ flex: 1.5 }}>Name</h5>
              <h5 style={{ flex: 2 }}>Email</h5>
              <h5 style={{ flex: 1 }}>mobile</h5>
              <h5 style={{ flex: 1 }}>work</h5>
              <h5 style={{ flex: 1 }}>role</h5>
              <h5 style={{ flex: 1 }}>date created</h5>
              <h5 style={{ flex: 1 }}>account status</h5>
              <h5 style={{ flex: 0.5 }}>delete</h5>
            </li>
            <li className="admin__list">
              <h5 style={{ flex: 1.5 }}>Anmol Sonwane</h5>
              <h5 style={{ flex: 2 }}>anmolsonwane@gmail.com</h5>
              <h5 style={{ flex: 1 }}>+919804394323</h5>
              <h5 style={{ flex: 1 }}>Student</h5>
              <h5 style={{ flex: 1 }}>admin</h5>
              <h5 style={{ flex: 1 }}>2021 21st jul</h5>
              <h5 style={{ flex: 1 }}>active</h5>
              <h5 style={{ flex: 0.5, color: "red" }}>delete</h5>
            </li>
            <li className="admin__list">
              <h5 style={{ flex: 1.5 }}>Yohan</h5>
              <h5 style={{ flex: 2 }}>Yohanbhai@gmail.com</h5>
              <h5 style={{ flex: 1 }}>+914343433763</h5>
              <h5 style={{ flex: 1 }}>artist</h5>
              <h5 style={{ flex: 1 }}>lead</h5>
              <h5 style={{ flex: 1 }}>2018</h5>
              <h5 style={{ flex: 1 }}>active</h5>
              <h5 style={{ flex: 0.5, color: "red" }}>delete</h5>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Admin;
