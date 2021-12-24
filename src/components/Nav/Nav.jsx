import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Nav() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <Link to="/" className="button">
          <h4>Home</h4>
        </Link>
        <div className="links-wrap">
          <Link to="/category" className="button">
            <h4>Categories</h4>
          </Link>
          <Link to="/cart" className="button">
            <div className="cart-nav-wrap">
              <div className="cart-icon">
                <i></i>
              </div>

              <div className="cart-text">
                <h4>Cart</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
