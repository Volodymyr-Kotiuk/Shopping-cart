import React from "react";
import "../assets/styles/Home.css"; 
import logo from "../assets/logo/logo.svg";

export function Home() {
  return (
    <div className="cont">
      <p className="subtitle">Choose your dream tent</p>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}
