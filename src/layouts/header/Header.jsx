import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenu("home");
    } else if (path === "/about") {
      setMenu("about");
    } else if (path.startsWith("/shop")) {
      setMenu("shop");
    } else if (path === "/contact") {
      setMenu("contact");
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="header">
      <a href="#">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <span className="menu-icon" onClick={toggleMenu}>
        <FiMenu />
      </span>
      <div>
        <ul id="navbar" ref={menuRef} className={menuOpen ? "open" : ""}>
          <span className="close-button" onClick={toggleMenu}>
            <FaTimes />
          </span>
          <li>
            <Link to="/" className={menu === "home" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={menu === "about" ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link to="/shop" className={menu === "shop" ? "active" : ""}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className={menu === "contact" ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
