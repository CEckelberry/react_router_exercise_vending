import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"


function NavBar(){
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/applepie">
                Applie Pie
            </NavLink>
            <NavLink exact to="/pepsi">
                Pepsi
            </NavLink>
            <NavLink exact to="/skittles">
                Skittles
            </NavLink>
        </nav>
    )
}

export default NavBar;