import React, { useState } from "react";
import "./css/Aside.css";
import SideLink from "./Link";
import { NavLink } from "react-router-dom";
const Aside = () => {
  const [bool, setBool] = useState(true);
  return (
    <aside className="aside">
      <NavLink to="/dashboard">
        <SideLink title="Dashboard" />
      </NavLink>
      <NavLink to="/transactions">
        <SideLink title="Transactions" />
      </NavLink>
      <NavLink to="/inventory">
        <SideLink title="Inventory Items" />
      </NavLink>
      <NavLink to="/databaseMgt">
        <SideLink title="Database Management" />
      </NavLink>
      <NavLink to="/adminMgt">
        <SideLink title="Admin Management" />
      </NavLink>
    </aside>
  );
};

export default Aside;
