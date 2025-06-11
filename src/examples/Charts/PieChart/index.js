import React from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ title, chart }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h6>{title}</h6>
      <Pie data={chart} />
    </div>
  );
}

PieChart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  chart: PropTypes.object.isRequired,
};

export default PieChart;
