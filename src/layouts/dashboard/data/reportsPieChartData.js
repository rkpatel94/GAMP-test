const reportsPieChartData = {
  pieChartData: {
    labels: [
      "Registered Applications",
      "Approved Applications",
      "Pending Applications",
      "Rejected Applications",
    ],
    datasets: [
      {
        label: "Application Status",
        data: [150, 95, 35, 20],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
};

export default reportsPieChartData;
