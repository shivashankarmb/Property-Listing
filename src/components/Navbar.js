import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Property Listing</h1>
      </div>
      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/buy" onClick={() => setMenuOpen(false)}>Buy</Link>
        <Link to="/rent" onClick={() => setMenuOpen(false)}>Rent</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </nav>
  );
}

export default Navbar;
