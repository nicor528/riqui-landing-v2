import React from "react";
import logo from "assets/img/logo/logo2.png";
import "./animatedLogo.css";

export default function AnimatedLogo({ size = 160 }) {
  return (
   <div className="logo-animation-wrapper">
  <img
    src={logo}
    alt="Logo"
    className="logo-foreground"
  />

  <img
    src="/AnimatedHexCircuit.svg"
    alt=""
    className="logo-background"
  />
</div>

  );
}
