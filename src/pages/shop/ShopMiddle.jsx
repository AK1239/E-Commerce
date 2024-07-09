import React from "react";
import "./ShopMiddle.css";
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

const ShopMiddle = () => {
  return (
    <>
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more on coupons & up to 70% off!</p>
      </section>
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
      <section id="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </section>
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

export default ShopMiddle;
