import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";

import BodyContainer from "./Components/BodyContainer";
import Aside from "./Components/Aside";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="body">
          <div className="body__left">
            <Aside />
          </div>
          <div className="body__right">
            <BodyContainer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
