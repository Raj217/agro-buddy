import  { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import React from 'react';
function Navbar() {
  const [isMobile,setIsMobile]=useState("false");
  return (
    <div className="hello">
    <nav className="navbar" >
      <h2 className="logo">Agro-buddy</h2>
      <ul className={(isMobile=="false")?"nav-links":"nav-links-mobile"} >
      {/* <ul  className="nav-links"> */}
       <Link to ="/" className="home">
       <li>Home</li>
       </Link>
       <Link to ="/about" className="home">
       <li>About</li>
       </Link>
       <Link to ="/" className="home">
       <li>Contact</li>
       </Link>
       <Link to ="/" className="home">
       <li>Help</li>
       </Link>
       <Link to ="/" className="home">
       <li>Home</li>
       </Link>
      </ul>
      <button className="mobileview" onClick={()=>setIsMobile(!isMobile)}>{
      isMobile?( <MenuIcon />)
        :(<MenuIcon />)}
    </button>
    </nav>
    </div>
  )
}

export default Navbar