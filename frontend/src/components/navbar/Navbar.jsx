import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
function Navbar() {
  const [isMobile,setIsMobile]=useState("false");
  return (
    <nav className="navbar">
      <h2 className="logo">Agro-buddy</h2>
      <ul className={isMobile?"nav-links-mobile":"nav-links"} onClick={()=>setIsMobile(false)}>
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
       {/* <Link to ="/" className="home">
       <li>Home</li>
       </Link> */}
      </ul>
      <button className="mobileview" onClick={()=>setIsMobile(!isMobile)}>{
      isMobile?( <MenuIcon />)
        :(<MenuIcon />)}
    </button>
    </nav>
  )
}

export default Navbar