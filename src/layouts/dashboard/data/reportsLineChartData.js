const reportsLineChartData = {
  trainingParticipationData: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Group A",
        data: [120, 135, 150, 160, 175, 190, 180, 170, 165, 150, 140, 130],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Group B",
        data: [100, 115, 130, 140, 155, 165, 160, 155, 150, 140, 135, 125],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
};

export default reportsLineChartData;
