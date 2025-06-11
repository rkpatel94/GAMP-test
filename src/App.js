import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Sidenav from "examples/Sidenav";
import theme from "assets/theme";
import routes from "routes";
import { useMaterialUIController } from "context";

export default function App() {
  const [controller] = useMaterialUIController();
  const { layout, sidenavColor, transparentSidenav, whiteSidenav, darkMode } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.setAttribute("dir", controller.direction);
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [controller.direction, pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) =>
      route.collapse ? (
        getRoutes(route.collapse)
      ) : route.route ? (
        <Route path={route.route} element={route.component} key={route.key} />
      ) : null
    );

  const isAuthPage = pathname.includes("/sign-in") || pathname.includes("/sign-up");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isAuthPage && layout === "dashboard" && (
        <Sidenav
          color={sidenavColor}
          brand={
            (transparentSidenav && !darkMode) || whiteSidenav
              ? "assets/images/logo-ct-dark.png"
              : "assets/images/logo-ct.png"
          }
          brandName="GAMP Dashboard"
          routes={routes}
        />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </ThemeProvider>
  );
}
