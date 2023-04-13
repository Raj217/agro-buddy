import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from '@mui/icons-material/Person';
import { useTheme, Avatar } from "@mui/material";
import SignUp from "../forms/SignUp";
import * as Palette from "../../configs/pallete";
import { AuthContext } from "../../context/auth";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
} from "@mui/material";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
import React from "react";

function Navbar() {
  const allNavLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Help", link: "/" },
  ];
  const [isActive, setIsActive] = React.useState("Home");
  const [isIconClicked, setIsIconClicked] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const [isNotMobile, setIsMobile] = useState(theme.breakpoints.down("sm"));
  const { loggedIn } = useContext(AuthContext);
  // const isMobile = theme.breakpoints.down('sm')
  // React.useEffect(() => {},[loggedIn]);

  return (
    <AppBar style={{ backgroundColor: 'transparent' }} position="static" elevation={0}>
      <CssBaseline />
      <Toolbar style={{ backgroundColor: 'transparent' }} variant="regular">
        <div variant="h5" fontWeight="bold" className="logo">
          <img
            style={{ height: "26px", width: "175px" }}
            src={Logo}
            alt="AgroBuddy"
          />
        </div>
        <div className={isNotMobile ? "nav-links" : `nav-links-mobile ${isIconClicked && "icon-active"}`}>
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
            <Avatar sx={{ display: 'none' }}>
              <PersonIcon/>
            </Avatar>
          ) : (
            // <Button sx={{
            //   height: '40px',
            //   width: '70px',
            //   color: Palette.accent,
            //   borderRadius: '10px',
            //   fontSize: '12px',
            // }} variant="outline">SignUp</Button>
            null
          )}
        </div>
        <div
          className="mobileview"
          onClick={() => {
            setIsMobile((prev) => !prev);
            setIsIconClicked(!isIconClicked);
          }}
        >
          {isNotMobile ? (
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
