import React from "react";
import "./css/Transaction.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Transactions = () => {
  return (
    <div>
      <section className="transactions">
        <h2>NO TRANSACTION YET</h2>
        <p>
          <Link to="/dashboard">Go to Dashboard</Link>
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Transactions;
