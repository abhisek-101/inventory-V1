import React from "react";
import Card from "./Card";
import "./css/Dashboard.css";
import Chart from "./Chart";
import PieChart from "./PieChart";
import DetailCard from "./DetailCard";
import TransactionCard from "./TransactionCard";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard__card">
        <Card title="Total sales Today" value="7" style={"#1cd487"} />
        <Card
          title="All time total transactions"
          value="1363"
          style={"#d49c04"}
        />
        <Card title="Total items in Stock" value="70" style={"#1390f0"} />
      </div>

      <div className="dashboard__chart">
        <div className="chart__chart">
          <Chart />
        </div>
        <div className="chart__pie">
          <PieChart />
        </div>
      </div>

      <div className="dashboard__row">
        <DetailCard title="High in Demand" leftT="Item" rightT="Qty Sold" />
        <DetailCard title="Low in Demand" leftT="Item" rightT="Qty Sold" />
        <DetailCard
          title="Highest Earnings"
          leftT="Item"
          rightT="Total Earned"
        />
        <DetailCard
          title="Lowest Earnings"
          leftT="Item"
          rightT="Total Earned"
        />
      </div>

      <div className="transactionCards">
        <TransactionCard
          title="Daily Transactions"
          time="Date"
          qtySold="Qty Sold"
          totalTrans="Tot. Trans"
          totalEarned="Tot. Earned"
        />

        <TransactionCard
          title="Transactions by Day"
          time="Date"
          qtySold="Qty Sold"
          totalTrans="Tot. Trans"
          totalEarned="Tot. Earned"
        />
      </div>
      <div className="transactionCards">
        <TransactionCard
          title="Transactions by Months"
          time="Date"
          qtySold="Qty Sold"
          totalTrans="Tot. Trans"
          totalEarned="Tot. Earned"
        />

        <TransactionCard
          title="Transactions by Year"
          time="Date"
          qtySold="Qty Sold"
          totalTrans="Tot. Trans"
          totalEarned="Tot. Earned"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
