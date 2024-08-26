import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">CNAPP Dashboard</div>
      <input type="text" className="search-bar" placeholder="Search anything..." />
      <div className="navbar-controls">
        {/* Add your icons and controls here */}
      </div>
     
    </nav>
  );
}

export default Navbar;

