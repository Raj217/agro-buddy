import React, { useContext } from "react";
import { Typography, Stack, Button, Grid, Box } from "@mui/material";
import { AuthContext } from "../../../../context/auth";
import { useNavigate } from "react-router-dom";
import * as Palette from "../../../../configs/pallete";
import banner from "../../../../assets/banner.png";
import "./Hero.css";

function Hero() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <Box paddingTop="80px">
        {/* <Box> */}
        <Grid container rowSpacing="30px">
          <Grid
            minWidth="50%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              paddingLeft: {
                md: "100px",
                sm: "70px",
              },
            }}
            item
            md={6}
            sm={6}
            xs={12}
          >
            <Box width="80%">
              <Typography
                fontWeight={700}
                textAlign="left"
                sx={{ fontSize: { lg: "3.5rem", xs: "2.5rem" } }}
              >
                Empowering Farmers with Data-Driven Insights
              </Typography>
              <Typography
                padding="20px 0"
                fontWeight={500}
                textAlign="left"
                sx={{
                  fontSize: { lg: "1rem", xs: "0.8rem" },
                  color: Palette.secondary,
                }}
              >
                Empowering Farmers for Success: Maximize Your Crop Yields and
                Minimize Risks with AgroBuddy's Comprehensive Data-Driven
                Insights and Analytics
              </Typography>
              {isLoggedIn ? (
                <Button variant="contained" onClick={() => navigate("/search")}>
                  Explore
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => navigate("/sign-in")}
                >
                  Sign In
                </Button>
              )}
            </Box>
          </Grid>
          <Grid
            minWidth="40%"
            margin="auto"
            item
            md={6}
            sm={6}
            xs={12}
          >

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                style={{ height: "400px", width: "400px" }}
                src={banner}
                alt="{<Banner/>}"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Hero;
