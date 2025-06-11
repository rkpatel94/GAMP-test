/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "30%", align: "left" },
      { Header: "department", accessor: "department", align: "left" },
      { Header: "designation", accessor: "designation", align: "left" },
      { Header: "role", accessor: "role", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: <Author image={team2} name="Rajesh Kumar" email="rajesh@gmail.com" />,
        department: <Job title="Management" description="Organization" />,
        designation: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Manager
          </MDTypography>
        ),
        role: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Admin" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Priya Sharma" email="priya@gmail.com" />,
        department: <Job title="Development" description="Software" />,
        designation: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Developer
          </MDTypography>
        ),
        role: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="User" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team4} name="Anjali Patel" email="anjali@gmail.com" />,
        department: <Job title="Projects" description="Execution" />,
        designation: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Executive
          </MDTypography>
        ),
        role: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Admin" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Vikram Singh" email="vikram@gmail.com" />,
        department: <Job title="Development" description="Software" />,
        designation: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Developer
          </MDTypography>
        ),
        role: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="User" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team3} name="Rohan Gupta" email="rohan@gmail.com" />,
        department: <Job title="Management" description="Executive" />,
        designation: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Manager
          </MDTypography>
        ),
        role: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="User" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        name: <Author image={team4} name="Meera Joshi" email="meera@gmail.com" />,
        department: <Job title="Development" description="Software" />,
        designation: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Developer
          </MDTypography>
        ),
        role: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="User" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
