"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.style.right = "0";
    }
  };

  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.style.right = "-200px";
    }
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {});

    return () => {
      document.removeEventListener("DOMContentLoaded", () => {});
    };
  }, []);

  return (
    <div className="absolute z-10 w-full">
      <nav>
        <Link href="/" className="logo">
          Xplore
          <i className="fab fa-staylinked"></i>kill
        </Link>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/course">Course</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      </nav>
    </div>
  );
};

export default Navbar;
