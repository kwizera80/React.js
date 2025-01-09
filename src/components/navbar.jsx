import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "../styles/nav.css"
const Navbar = () => {
  return (
    <div className="navbar">

      <div className="logo">
        <span>  <FaPlus /> </span>
        <p>  Medicare   </p>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctor">FindDoctor</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>

      <button className="login-btn"> <Link to="/login">Login</Link> </button>

    </div>
  );
};

export default Navbar;
