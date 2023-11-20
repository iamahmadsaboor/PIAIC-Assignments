"use client";
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
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin"></i>
      </div>
      <p>
        Made with <i className="fas fa-heart"></i> by{" "}
        <a href="https://www.iamahmadsaboor.vercel.app">Ahmad</a>
      </p>
      <p>
        Copyright © 2023 <a href="index.html">Xplore Skill</a>. All Rights
        Reserved
      </p>
    </section>
  );
};

export default Footer;
