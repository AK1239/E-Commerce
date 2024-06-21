import React, { useState, useRef } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <section id="header">
      <a href="#">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <span className="menu-icon" onClick={openMenu}>
        <FiMenu />
      </span>
      <div>
        <ul id="navbar" ref={menuRef}>
          <span className="close-button" onClick={closeMenu}>
            <FaTimes />
          </span>
          <li>
            <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className={menu === "shop" ? "active" : ""} onClick={() => setMenu("shop")}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className={menu === "about" ? "active" : ""} onClick={() => setMenu("about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className={menu === "blog" ? "active" : ""} onClick={() => setMenu("blog")}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className={menu === "contact" ? "active" : ""} onClick={() => setMenu("contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
