import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import PieChart from "examples/Charts/PieChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import reportsPieChartData from "layouts/dashboard/data/reportsPieChartData";

function Dashboard() {
  const { trainingParticipationData } = reportsLineChartData;
  const { pieChartData } = reportsPieChartData;

  const chartBoxStyle = {
    height: "400px",
    width: "100%",
    padding: "20px",
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={1.5}>
              <ComplexStatisticsCard icon="person_add" title="Registered Candidates" count={150} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="thumb_up_alt"
                title="Approved Applications"
                count={95}
                percentage={{
                  color: "success",
                  amount: "63%",
                  label: "of total applications",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="pending_actions"
                title="Pending Applications"
                count={35}
                percentage={{
                  color: "warning",
                  amount: "23%",
                  label: "of total applications",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="thumb_down_alt"
                title="Rejected Applications"
                count={20}
                percentage={{
                  color: "error",
                  amount: "13%",
                  label: "of total applications",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Box mb={3}>
                <Card>
                  <Box p={2} style={chartBoxStyle}>
                    <ReportsLineChart
                      title="Training Participation Trends"
                      chart={trainingParticipationData}
                    />
                  </Box>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box mb={3}>
                <Card>
                  <Box p={2} style={{ ...chartBoxStyle, marginBottom: "10px" }}>
                    <PieChart title="Application Status Distribution" chart={pieChartData} />
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
