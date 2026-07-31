import "./../styles/Navbar.css";
import logo from "../assets/images/logo.png";


function Navbar() {
  return (
    <nav className="navbar">

      <div className="container navbar-container">

        <div className="logo-section">
          <img src={logo} alt="RIA Associates" />

          <div className="logo-text">
            <h2>RIA INTERIORS & CONSTRUCTION</h2>
            <p>Architecture • Interior • Construction</p>
          </div>

        </div>

        <ul className="nav-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#services">Services</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>


      </div>

    </nav>
  );
}

export default Navbar;