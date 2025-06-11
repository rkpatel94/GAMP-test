import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function ReportsLineChart({ title, chart }) {
  return (
    <div>
      <h6>{title}</h6>
      <Line
        data={{
          labels: chart.labels,
          datasets: chart.datasets,
        }}
      />
    </div>
  );
}

ReportsLineChart.propTypes = {
  title: PropTypes.string.isRequired,
  chart: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        backgroundColor: PropTypes.string,
        borderColor: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default ReportsLineChart;
