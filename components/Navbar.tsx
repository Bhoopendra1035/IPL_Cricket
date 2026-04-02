"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="glass-panel main-nav">
      <div className="nav-logo">STREAMMAX</div>

      {/* Hamburger Toggle Button */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <div
        className={`${styles["nav-links-container"]} ${isOpen ? styles.open : ""}`}
      >
        <div className="nav-links">
          <a href="#matches" onClick={closeMenu}>
            Live Matches
          </a>
          <a href="#highlights" onClick={closeMenu}>
            Highlights
          </a>
          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>
          <a href="#sponsors" onClick={closeMenu}>
            Sponsors
          </a>
          <div className={styles["theme-toggle-wrapper"]}>
            <ThemeToggle />
          </div>
          <button className="nav-login" onClick={closeMenu}>
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
}
