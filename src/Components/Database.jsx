import React from "react";
import "./css/Database.css";
import Footer from "./Footer";

const Database = () => {
  return (
    <section className="container">
      <section className="database">
        <div className="database__id">
          <div className="database__download">
            <button className="btn1">Download Data</button>
          </div>
          <div className="database__import">
            <button className="btn1">Import Data</button>
            <p>Drag and drop your files here and must be .sqlite file</p>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Database;
