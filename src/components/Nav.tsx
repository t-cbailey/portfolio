import { Link } from "react-router-dom";
import "../styling/nav.css";
import { FaLaptop, FaChartBar, FaQuestion, FaStar } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { IconContext } from "react-icons";
import { NavProps } from "../../types/CustomTypes";

function Nav({ currentPage, setCurrentPage }: NavProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = event.currentTarget as HTMLAnchorElement;

    if (element.innerText) {
      setCurrentPage(element.innerText);
    }
  };

  return (
    <nav>
      <IconContext.Provider
        value={{
          size: "2em",
          color: "#424242",
        }}
      >
        <ul id="navItems">
          <li className="navItem">
            <Link
              to="/about"
              className="navIcons"
              onClick={handleClick}
              style={{
                textDecoration: currentPage === "About" ? "underline" : "none",
                fontWeight: currentPage === "About" ? "800" : "none",
                color: currentPage === "About" ? "black" : "#424242",
              }}
            >
              <FaQuestion
                style={{
                  fontWeight: currentPage === "About" ? "800" : "none",
                  color: currentPage === "About" ? "Black" : "#424242",
                }}
              />
              About
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/projects"
              className="navIcons"
              onClick={handleClick}
              style={{
                textDecoration:
                  currentPage === "Projects" ? "underline" : "none",
                fontWeight: currentPage === "Projects" ? "800" : "none",
                color: currentPage === "Projects" ? "Black" : "#424242",
              }}
            >
              <FaLaptop
                style={{
                  fontWeight: currentPage === "Projects" ? "800" : "none",
                  color: currentPage === "Projects" ? "Black" : "#424242",
                }}
              />
              Projects
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/skills"
              className="navIcons"
              onClick={handleClick}
              style={{
                textDecoration: currentPage === "Skills" ? "underline" : "none",
                fontWeight: currentPage === "Skills" ? "800" : "none",
                color: currentPage === "Skills" ? "Black" : "#424242",
              }}
            >
              <FaChartBar
                style={{
                  fontWeight: currentPage === "Skills" ? "800" : "none",
                  color: currentPage === "Skills" ? "Black" : "#424242",
                }}
              />
              Skills
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/certifications"
              className="navIcons"
              onClick={handleClick}
              style={{
                textDecoration:
                  currentPage === "Certifications" ? "underline" : "none",
                fontWeight: currentPage === "Certifications" ? "800" : "none",
                color: currentPage === "Certifications" ? "Black" : "#424242",
              }}
            >
              <PiCertificateBold
                style={{
                  fontWeight: currentPage === "Certifications" ? "800" : "none",
                  color: currentPage === "Certifications" ? "Black" : "#424242",
                }}
              />
              Certifications
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="/contact"
              className="navIcons"
              onClick={handleClick}
              style={{
                textDecoration:
                  currentPage === "Contact" ? "underline" : "none",
                fontWeight: currentPage === "Contact" ? "800" : "none",
                color: currentPage === "Contact" ? "Black" : "#424242",
              }}
            >
              <FaStar
                style={{
                  fontWeight: currentPage === "Contact" ? "800" : "none",
                  color: currentPage === "Contact" ? "Black" : "#424242",
                }}
              />
              Contact
            </Link>
          </li>
        </ul>
      </IconContext.Provider>
    </nav>
  );
}

export default Nav;
