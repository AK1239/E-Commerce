import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div className="col">
          <img src={logo} alt="Company Logo" className="logo" />
          <h4>Contact</h4>
          <p>
            <span className="bold">Address :</span> Mbweni
          </p>
          <p>
            <span className="bold">Phone : </span> 0783061555
          </p>
          <p>
            <span className="bold">Hours : </span> 10.00 - 18:00, Mon - Sat
          </p>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>@{new Date().getFullYear()} SHEHITA All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
