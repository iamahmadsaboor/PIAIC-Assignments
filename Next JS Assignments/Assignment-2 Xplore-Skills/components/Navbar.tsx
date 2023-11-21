"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10 w-full">
      <nav className="flex justify-between items-center py-4 px-8 md:px-16">
        <Link href="/">
          <span className="cursor-pointer text-xl font-bold">
            Xplore
            <i className="fab fa-staylinked"></i>kill
          </span>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
        >
          <div className="flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
            <Link href="/">
              <span className="cursor-pointer mx-3 py-2 text-gray-700 font-medium md:mx-2">
                Home
              </span>
            </Link>
            <Link href="/course">
              <span className="cursor-pointer mx-3 py-2 text-gray-700 font-medium md:mx-2">
                Course
              </span>
            </Link>
            <Link href="/blog">
              <span className="cursor-pointer mx-3 py-2 text-gray-700 font-medium md:mx-2">
                Blog
              </span>
            </Link>
            <Link href="/about">
              <span className="cursor-pointer mx-3 py-2 text-gray-700 font-medium md:mx-2">
                About
              </span>
            </Link>
            <Link href="/contact">
              <span className="cursor-pointer mx-3 py-2 text-gray-700 font-medium md:mx-2">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
