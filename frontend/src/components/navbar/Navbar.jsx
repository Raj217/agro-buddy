import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme, Avatar, Button } from "@mui/material";
import { AuthContext } from "../../context/auth";
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
import React from "react";

function Navbar({ signedIn, setSignedIn }) {
  const allNavLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Teams", link: "/developers" },
  ];
  let currentPage;
  allNavLinks.forEach((link) => {
    if (link.link.localeCompare(window.location.pathname) === 0) {
      currentPage = link.name;
    }
  });
  const [isActive, setIsActive] = React.useState(currentPage);
  const [isIconClicked, setIsIconClicked] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  let isNotMobile = theme.breakpoints.up("sm") !== null;
  console.log(signedIn);
  const isMobile = theme.breakpoints.down("sm");

  return (
    <AppBar
      style={{ backgroundColor: "transparent" }}
      position="static"
      elevation={0}
    >
      <CssBaseline />
      <Toolbar style={{ backgroundColor: "transparent" }} variant="regular">
        <div variant="h5" fontWeight="bold" className="logo" onClick={() => { navigate('/') }} >
          <img
            style={{ height: "26px", width: "175px", cursor: 'pointer' }}
            src={Logo}
            alt="AgroBuddy"

          />
        </div>
        <div
          style={{
            display: !isMobile && "none",
          }}
          className={"nav-links"}
        >
          {allNavLinks.map((link) => (
            <li
              key={link.name}
              className={isNotMobile ? "nav-link" : `nav-link-mobile`}
              onClick={() => {
                setIsActive(link.name);
                navigate(link.link);
              }}
            >
              <Typography>{link.name}</Typography>
              <div
                style={
                  isActive === link.name ? { width: "2.5vw" } : { width: 0 }
                }
                className="underline"
              ></div>
            </li>
          ))}
          {signedIn && (
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                setSignedIn(false);
                window.location.reload(false);
              }}
            >
              Sign out
            </Button>
          )}
        </div>
        <div
          className={`nav-links-mobile ${!isIconClicked ? "icon-not-active" : "icon-active"
            }`}
        >
          {allNavLinks.map((link) => (
            <li
              key={link.name}
              className={`nav-link-mobile`}
              onClick={() => {
                setIsActive(link.name);
                navigate(link.link);
              }}
            >
              <Typography>{link.name}</Typography>
              <div
                style={
                  isActive === link.name ? { width: "2.5vw" } : { width: 0 }
                }
                className="underline"
              ></div>
            </li>
          ))}
        </div>
        <div
          className="mobileview"
          onClick={() => {
            setIsIconClicked(!isIconClicked);
          }}
        >
          {!isIconClicked ? (
            <MenuIcon color="secondary" />
          ) : (
            <CloseIcon color="secondary" />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
