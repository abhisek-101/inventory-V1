import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import Database from "./Database";
import Inventory from "./Inventory";
import Transactions from "./Transactions";

const BodyContainer = () => {
  return (
    <section className="bodyContainer">
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/transactions">
          <Transactions />
        </Route>
        <Route exact path="/inventory">
          <Inventory />
        </Route>
        <Route exact path="/databaseMgt">
          <Database />
        </Route>
        <Route exact path="/adminMgt">
          <Admin />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </section>
  );
};

export default BodyContainer;
