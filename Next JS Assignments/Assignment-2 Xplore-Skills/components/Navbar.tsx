"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute z-10 w-full">
      <nav>
        <Link href="/" className="logo">
          Xplore
          <i className="fab fa-staylinked"></i>kill
        </Link>
        <div className="nav-links" id="navLinks">
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
      </nav>
    </div>
  );
};

export default Navbar;
