import React from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode"; 
import { NavLink , Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to = '/'><h1> Chill Game</h1></NavLink>

      <div className="navbar_links">
        <DarkMode/>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/top_rated">Top Rated </NavLink>
        <NavLink to='/upcoming'>Upcoming</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
