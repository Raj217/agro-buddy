import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LinkIcon from "@mui/icons-material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "@mui/material/Link";
import * as Palette from "../../configs/pallete";
import Logo from "../../assets/logo.svg";

import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        left: 0,
        width: "100%",
        height: "auto",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        bottom: "80px",
        backgroundColor: Palette.accentDark,
        marginTop: "3rem",
      }}
    >
      <Container maxWidth="xl">
        <Grid container >
          <Grid
            item
            md={3}
            xs={12}
            paddingLeft="50px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{
              paddingLeft: { xs: "3rem", md: "2rem" },
              paddingRight: { xs: "3rem", md: "2rem" },
            }}
          >
            <div
              style={{
                backgroundColor: Palette.primary,
                cursor: "pointer",
                padding: "15px",
                borderRadius: '7px',
                width: 'fit-content'
              }}
            >
              <img onClick={() => navigate("/")} className="logo" src={Logo} />
            </div>
            <Typography
              color={Palette.primary}
              lineHeight={1.8}
              textAlign="left"
              fontWeight={500}
              paddingTop="30px"
            >
              Revolutionizing Farming with AgroBuddy: The Ultimate Crop
              Analytics Tool
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              paddingLeft: { xs: "3rem", md: "2rem" },
              paddingRight: { xs: "3rem", md: "2rem" },
              paddingTop: { xs: "2rem" },
            }}
          >
            <div className="alignment">
              <div className="icon-wrapper">
                <LinkIcon
                  textAlign="left"
                  style={{ color: Palette.primary, fontSize: "22px" }}
                />
              </div>
              <Typography color={Palette.primary} variant="h5" fontWeight={500}>
                Links
              </Typography>
            </div>
            <Typography
              color={Palette.primary}
              variant="body2"
              paddingLeft="60px"
              paddingRight="30px"
              sx={{
                paddingLeft: { xs: "3rem", md: "2rem" },
                paddingRight: { xs: "3rem", md: "2rem" },
                lineHeight: { xs: "2rem" },
                cursor: "pointer",
              }}
              textAlign="left"
              lineHeight="20px"
            >
              <div
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </div>
            </Typography>
            <Typography
              color={Palette.primary}
              variant="body2"
              paddingLeft="60px"
              paddingRight="30px"
              sx={{
                paddingLeft: { xs: "3rem", md: "2rem" },
                paddingRight: { xs: "3rem", md: "2rem" },
                lineHeight: { xs: "2rem" },
                cursor: "pointer",
              }}
              textAlign="left"
              lineHeight="20px"
            >
              <div
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </div>
            </Typography>
            <Typography
              color={Palette.primary}
              variant="body2"
              paddingLeft="60px"
              paddingRight="30px"
              sx={{
                paddingLeft: { xs: "3rem", md: "2rem" },
                paddingRight: { xs: "3rem", md: "2rem" },
                lineHeight: { xs: "2rem" },
                cursor: "pointer",
              }}
              textAlign="left"
              lineHeight="20px"
            >
              <div
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contacts
              </div>
            </Typography>
            <Typography
              color={Palette.primary}
              variant="body2"
              paddingLeft="60px"
              paddingRight="30px"
              sx={{
                paddingLeft: { xs: "3rem", md: "2rem" },
                paddingRight: { xs: "3rem", md: "2rem" },
                lineHeight: { xs: "2rem" },
                cursor: "pointer",
              }}
              textAlign="left"
              lineHeight="20px"
            >
              <div
                onClick={() => {
                  navigate("/developers");
                }}
              >
                Teams
              </div>
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              paddingLeft: { xs: "3rem", md: "2rem" },
              paddingRight: { xs: "3rem", md: "2rem" },
              paddingTop: { xs: "2rem" },
            }}
          >
            <div className="alignment">
              <div className="icon-wrapper">
                <LocationOnIcon
                  textAlign="left"
                  style={{ color: Palette.primary, fontSize: "22px" }}
                />
              </div>
              <Typography color={Palette.primary} variant="h5" fontWeight={500}>
                Address
              </Typography>
            </div>
            <Typography
              color={Palette.primary}
              variant="body2"
              paddingLeft="60px"
              paddingRight="30px"
              sx={{
                paddingLeft: { xs: "3rem", md: "2rem" },
                paddingRight: { xs: "3rem", md: "2rem" },
                lineHeight: { md: "1.5rem", xs: "2rem" },
              }}
              textAlign="left"
              lineHeight="20px"
            >
              Nit Silchar,
              <br />
              Cachar, Assam, Pin Code : 788010
            </Typography>
            <div className="alignment">
              <div className="icon-wrapper">
                <MailIcon
                  style={{ color: Palette.primary, fontSize: "22px" }}
                />
              </div>
              <Typography color={Palette.primary} variant="h5" fontWeight={500}>
                Email
              </Typography>
            </div>
            <Typography
              color={Palette.primary}
              variant="body2"
              paddingLeft="60px"
              paddingRight="30px"
              sx={{
                paddingLeft: { xs: "3rem", md: "2rem" },
                paddingRight: { xs: "3rem", md: "2rem" },
                lineHeight: { xs: "2rem" },
              }}
              textAlign="left"
              lineHeight="20px"
            >
              <a
                style={{ color: Palette.primary }}
                id="change"
                href="mailto:agrobuddy217@gmail.com"
              >
                agrobuddy217@gmail.com
              </a>
            </Typography>
          </Grid>
          <Grid
            md={3}
            xs={12}
            margin="15px 0"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Stack flexDirection="row" justifyContent="center" gap={3}>
              <Link
                href="https://www.instagram.com/rajdristant/"
                color={Palette.dark}
              >
                <InstagramIcon sx={{ color: Palette.primary }} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100014350572946"
                color={Palette.dark}
              >
                <FacebookIcon sx={{ color: Palette.primary }} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/akash-suklabaidya-435aa5227/"
                color={Palette.dark}
              >
                <LinkedInIcon sx={{ color: Palette.primary }} />
              </Link>
            </Stack>

            <Typography
              color={Palette.primary}
              variant="subtitle1"
              textAlign="center"
            >
              {`${new Date().getFullYear()} | All rights reserved `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
