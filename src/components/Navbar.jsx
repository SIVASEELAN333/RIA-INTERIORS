import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="container navbar-container">

        {/* Logo */}

        <div className="logo-section">

          <img src={logo} alt="RIA Associates" />

          <div className="logo-text">

            <h2>RIA INTERIORS & CONSTRUCTION</h2>
            <p>Architecture • Interior • Construction</p>

          </div>

        </div>

        {/* Hamburger */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

      </div>

      {/* Menu */}

      <ul className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>

        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>

        <li>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>

      </ul>

    </nav>

  );

}

export default Navbar;