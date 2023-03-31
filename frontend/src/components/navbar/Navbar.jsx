import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Paper, Toolbar, Typography, CssBaseline } from "@mui/material";
import "./Navbar.css";
import React from "react";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <AppBar position='static' elevation={4}>
      <CssBaseline />
      <Toolbar variant="regular">
        {/* <nav className="navbar"> */}
          <Typography variant="h5" fontWeight='bold' className="logo">Agro-buddy</Typography>
          <div className={!isMobile ? "nav-links" : "nav-links-mobile"}>
            <Link to="/" className="nav-link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li>About</li>
            </Link>
            <Link to="/" className="nav-link">
              <li>Contact</li>
            </Link>
            <Link to="/" className="nav-link">
              <li>Help</li>
            </Link>
          </div>
          <div className="mobileview" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <MenuIcon /> : <MenuIcon />}
          </div>
        {/* </nav> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
