import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "# of earnings",
      data: [
        120000, 190000, 30000, 50000, 20000, 30000, 23000, 23555, 56222, 89000,
        44430, 40000,
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(25, 99, 132, 0.2)",
        "rgba(234, 162, 235, 0.2)",
        "rgba(235, 206, 86, 0.2)",
        "rgba(55, 192, 192, 0.2)",
        "rgba(23, 102, 255, 0.2)",
        "rgba(255, 169, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 199, 132, 1)",
        "rgba(54, 262, 235, 1)",
        "rgba(255, 206, 255, 1)",
        "rgba(175, 192, 192, 1)",
        "rgba(153, 112, 255, 1)",
        "rgba(205, 159, 164, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = () => (
  <>
    <div className="header">
      <h1 className="title">Earning</h1>
      <div className="links">2021</div>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default Chart;
