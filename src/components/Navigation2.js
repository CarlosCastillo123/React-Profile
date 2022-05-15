import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

import {Tabs, Navbar, Nav, NavDropdown, Tab, NavLink, NavItem} from 'react-bootstrap'

function Navbar2() {
return (
    <div>
        <Navbar>
           <NavItem>
               <Link to="/About">About Me</Link>
           </NavItem>
           <NavItem>
               <Link to="/Aortfolio">Portfolio</Link>
           </NavItem>
           <NavItem>
               <Link to="/Resume">Resume</Link>
           </NavItem>
           <NavItem>
               <Link to="/Contact">Contact</Link>
           </NavItem>

        </Navbar>
    </div>
)}
export default Navbar2