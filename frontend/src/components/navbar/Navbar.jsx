import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme, Avatar } from "@mui/material";
import { AuthContext } from "../../context/auth";
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
import React from "react";

function Navbar() {
  const allNavLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
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
  const [isNotMobile, setIsMobile] = useState(theme.breakpoints.down("sm"));
  const { loggedIn } = useContext(AuthContext);
  const isMobile = theme.breakpoints.down("sm");

  return (
    <AppBar
      style={{ backgroundColor: "transparent" }}
      position="static"
      elevation={0}
    >
      <CssBaseline />
      <Toolbar style={{ backgroundColor: "transparent" }} variant="regular">
        <div variant="h5" fontWeight="bold" className="logo">
          <img
            style={{ height: "26px", width: "175px" }}
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
          {loggedIn ? (
            <Avatar sx={{ display: "none" }}>
              <PersonIcon />
            </Avatar>
          ) : null}
        </div>
        <div
          className={`nav-links-mobile ${
            !isIconClicked ? "icon-not-active" : "icon-active"
          }`}
          style={{
            display: isNotMobile && "none",
          }}
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
            // setIsMobile((prev) => !prev);
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
