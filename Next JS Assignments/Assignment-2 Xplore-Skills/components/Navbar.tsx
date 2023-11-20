import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStaylinked } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="absolute z-10 w-full ">
        <Link href="/">
          <div className="logo flex items-center text-xl">
            Xplore
            <FontAwesomeIcon
              icon={faStaylinked}
              className="fab ml-1"
              style={{ fontSize: "42px", color: "#24f8c7" }}
            />
            <span className="font-bold">kill</span>
          </div>
        </Link>
        <div className="hidden md:block nav-links">
          <ul className="">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/course" className="hover:text-blue-500">
                Course
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
