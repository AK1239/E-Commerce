import React from "react";
import "./MiddleContainer.css";
import { products } from "../../layouts/data.js";

const Product = ({ src, brand, name, price }) => (
  <div className="pro">
    <img src={src} alt={name} />
    <div className="des">
      <span>{brand}</span>
      <h5>{name}</h5>
      <div className="star">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <h4>{price}</h4>
    </div>
    <a href="#">
      <i className="fa-solid fa-cart-shopping cart"></i>
    </a>
  </div>
);

const Section = ({ title, subtitle, products }) => (
  <section id="product1" className="section-p1">
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <div className="pro-container">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  </section>
);

const MiddleContainer = () => {
  const featuredProducts = products.slice(0, 8); // First 8 products as featured
  const newArrivals = products.slice(8); // Remaining products as new arrivals

  return (
    <>
      <Section title="Featured Products" subtitle="Summer Collection New Modern Design" products={featuredProducts} />
      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% off</span> - All t-Shirts & Accessories
        </h2>
        <button className="normal">Explore More</button>
      </section>
      <Section title="New Arrivals" subtitle="Summer Collection New Modern Design" products={newArrivals} />
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default MiddleContainer;
