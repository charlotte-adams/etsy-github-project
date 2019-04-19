import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="title-nav-wrapper">
          <div className="main-logo">
            <span className="logo" title="main-logo">
              CA
            </span>
          </div>
          <span className="nav-link-wrapper" title="main-nav">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </span>
          <span className="nav-link-wrapper" title="main-nav">
            <NavLink className="nav-link" to="/products">
              All Products
            </NavLink>
          </span>
          <span className="nav-link-wrapper">
            <NavLink className="cart-link" to="/cart">
              Shopping Cart
            </NavLink>
          </span>
        </div>
      </header>
    );
  }
}
