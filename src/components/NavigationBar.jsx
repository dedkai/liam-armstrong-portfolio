import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../logo thing.png";

export default function NavigationBar() {
  return (
    <header className="site-header">
      <nav className="navigation container">
        <div className="brand">
          <Link
            to="/"
            className="brand-logo-link"
            aria-label="Liam Armstrong home page"
            title="Liam Armstrong"
          >
            <img
              src={logoImage}
              alt="Liam Armstrong logo"
              className="logo-image"
            />
          </Link>

          <Link to="/" className="brand-name">
            Liam Armstrong
          </Link>
        </div>

        <div className="navigation-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/references">References</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </div>
      </nav>
    </header>
  );
}
