import React, {useState} from 'react';
import {Link, Route, Router} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <div className="navbar" id={open ? "open" : "close"}>
        
        <div className="links" id="fadein">
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/education"> Education </Link>
            <Link to="/aboutme"> About Me </Link>
            <Link to="/contact"> Contact </Link>
        </div>
        <div className="dropMenu" id="fadein">
            <button onClick={() => {setOpen((prev) => !prev)}}>
                <ReorderIcon />
            {open && (
                <ul className="menuOpen" id="menuOpen">
                    <Link to="/"><li> Home </li></Link>
                    <Link to="/projects"><li> Projects </li></Link>
                    <Link to="/education"><li> Education </li></Link>
                    <Link to="/aboutme"><li> About Me </li></Link>
                    <Link to="/contact"><li> Contact </li></Link>
                </ul>
            )}
            </button>
            
        </div>
        <text className="websiteName" id="fadein">austinthrash.com</text>
        <text className="menuText" id="fadein" onClick={() => {setOpen((prev) => !prev)}}>Menu</text>
        
    </div>
  )
}

export default Navbar;