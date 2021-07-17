import React from "react";
import "./css/Inventory.css";
import { data3 } from "./data3";
import Footer from "./Footer";
const Inventory = () => {
  return (
    <section className="inventory">
      <div className="inventory__add">
        <h4>Add new item</h4>
        <form className="inventory__form">
          <input type="text" placeholder="item name" />
          <input type="text" placeholder="item code" />
          <input type="text" placeholder="qty in stock" />
          <input type="text" placeholder="unit price" />

          <input type="text" placeholder="description" />
          <button className="btn">Add</button>
        </form>
      </div>

      <div className="inventory__items">
        <h4>Items</h4>
        <div className="items">
          <ul>
            <li className="inventory_list">
              <h5 style={{ flex: 2 }}>item_name </h5>
              <h5 style={{ flex: 2 }}>item_code </h5>
              <h5 style={{ flex: 2 }}>item_desc </h5>
              <h5 style={{ flex: 1.5 }}>item_qty </h5>
              <h5 style={{ flex: 1.5 }}>item_unitPrice </h5>
              <h5 style={{ flex: 1 }}></h5>
            </li>
            {data3.map((value, index) => {
              return (
                <li className="inventory_list" key={index}>
                  <h5 style={{ flex: 2 }}>{value.item_name} </h5>
                  <h5 style={{ flex: 2 }}>{value.item_code} </h5>
                  <h5 style={{ flex: 2 }}>{value.item_desc} </h5>
                  <h5 style={{ flex: 1.5 }}>{value.item_qty} </h5>
                  <h5 style={{ flex: 1.5 }}>{value.item_unitPrice} </h5>
                  <h5 style={{ flex: 1, color: "red" }}>Delete</h5>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Inventory;
