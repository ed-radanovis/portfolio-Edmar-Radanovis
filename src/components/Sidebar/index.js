import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-er.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
  faDatabase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  // faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo subtitle" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink 
          exact="true" activeclassname="active" to="/"
          onClick={() => setShowNav(false)} 
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)} 
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)} 
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)} 
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)} 
          exact="true"
          activeclassname="active"
          className="dashboard-link"
          to="/dashboard"
        >
          <FontAwesomeIcon icon={faDatabase} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)} 
          icon={faClose} 
          color="#e6b609"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            className="a1"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/edmar-radanovis-0130b611a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            className="a2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ed-radanovis"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        {/* <li>
        <a
          className="a3"
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/send?5535984256707&text=Olá, em que posso lhe ser útil?"
          >
          <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
        </a>
      </li> */}
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#e6b609"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};
export default Sidebar;
