import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import Logo from '../../assets/logo.svg';
import "./Navbar.css";
import React from "react";

function Navbar() {
  const allNavLinks = [{name:"Home", link:'/'}, {name:"About", link:'/'}, {name:"Contact", link:'/'}, {name:"Help", link:'/'}];
  const [isActive, setIsActive] = React.useState('Home')
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar position='static' elevation={0}>
      <CssBaseline />
      <Toolbar variant="regular">
          <div variant="h5" fontWeight='bold' className="logo">
            <img src={Logo} alt="AgroBuddy" />
            </div>
          <div className={!isMobile ? "nav-links" : "nav-links-mobile"}>
            {allNavLinks.map((link)=>(
              <li key={link.name}
              className="nav-link"
              onClick={()=>{
                setIsActive(link.name)
                navigate(link.link)
              }}>
                <Typography>{link.name}</Typography>
                <div style={isActive===link.name ? {width: '2.5vw'} : {width: '0vw'}} className="underline"></div>
              </li>
            ))}
          </div>
          <div className="mobileview" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <MenuIcon /> : <MenuIcon />}
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
