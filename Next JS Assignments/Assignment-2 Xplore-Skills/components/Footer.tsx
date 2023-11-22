"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="footer">
      <hr />
      <h4>About Us</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
        incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
        consectetur. Aliquid ab deserunt exercitationem, illum molestiae
        dolorem.
      </p>

      <div className="icons">
        <a href="https://www.facebook.com/iamahmadsaboor" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/iamahmadsaboor" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/iamahmadsaboor" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/iamahmadsaboor/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <p>
        Made with <i className="fas fa-heart"></i> by{" "}
        <a href="https://iamahmadsaboor.vercel.app" target="_blank">
          Ahmad
        </a>
      </p>
      <p>
        Copyright © 2023 <Link href="/">Xplore Skill</Link>. All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
