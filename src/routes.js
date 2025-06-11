import Dashboard from "layouts/dashboard";
import UserMaster from "layouts/userMaster";
import SignIn from "layouts/authentication/sign-in";

import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Users Master",
    key: "user-master",
    icon: <Icon fontSize="small">groupIcon</Icon>,
    route: "/user-master",
    component: <UserMaster />,
  },
  {
    type: "",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/sign-in",
    component: <SignIn />,
  },
];

export default routes;
