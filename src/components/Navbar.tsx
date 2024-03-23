import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../assets/styles/Navbar.css";

export function Navbar() {
  const { cartQuantity } = useShoppingCart();
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/Cart" className="nav-link">
              Cart ({cartQuantity})
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}
