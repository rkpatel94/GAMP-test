import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid, Card, Typography, Input, Button } from "@mui/material";
import login from "assets/images/login.png";

function Basic() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs={12} md={6} sx={{ backgroundColor: "#f8f9fa" }}>
        <img
          src={login}
          alt="Login Illustration"
          style={{ width: "80%", height: "80%", margin: "10%", objectFit: "cover" }}
        />
      </Grid>
      <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
        <Card sx={{ width: "100%", maxWidth: 400, p: 4, boxShadow: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="body2" align="center" sx={{ mb: 3 }}>
            Please sign in to continue to GAMP.
          </Typography>
          <Input fullWidth placeholder="Enter Username" sx={{ mb: 2 }} />
          <Input fullWidth placeholder="Enter Password" type="password" sx={{ mb: 2 }} />
          <Grid container justifyContent="flex-end">
            <Typography
              variant="body2"
              component={Link}
              to="#"
              color="primary"
              sx={{ fontSize: "0.75rem" }}
            >
              Forgot Password?
            </Typography>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, color: "white !important" }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Basic;
