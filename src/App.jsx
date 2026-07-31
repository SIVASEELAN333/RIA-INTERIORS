import Home from "./pages/Home";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/Navbar.css";

function App() {

  return (
    <>

      <Home />

      <a
        href="https://wa.me/919940053350?text=Hello%20RIA%20Associates,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

    </>
  );

}

export default App;