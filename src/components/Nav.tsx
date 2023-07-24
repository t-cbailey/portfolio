import { Link } from "react-router-dom";
import "../styling/nav.css";
import { FaLaptop, FaChartBar, FaQuestion, FaStar } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { IconContext } from "react-icons";
function Nav() {
  return (
    <nav>
      <IconContext.Provider
        value={{
          size: "2em",
          color: "#626262",
        }}
      >
        <ul id="navItems">
          <li className="navItem">
            <Link to="/about" className="navIcons">
              <FaQuestion />
              About
            </Link>
          </li>
          <li className="navItem">
            <Link to="/projects" className="navIcons">
              <FaLaptop />
              Projects
            </Link>
          </li>
          <li className="navItem">
            <Link to="/skills" className="navIcons">
              <FaChartBar />
              Skills
            </Link>
          </li>
          <li className="navItem">
            <Link to="/certifications" className="navIcons">
              <PiCertificateBold />
              Certifications
            </Link>
          </li>
          <li className="navItem">
            <Link to="/contact" className="navIcons">
              <FaStar />
              Contact
            </Link>
          </li>
        </ul>
      </IconContext.Provider>
    </nav>
  );
}

export default Nav;
