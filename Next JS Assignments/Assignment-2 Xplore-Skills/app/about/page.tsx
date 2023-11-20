import React from "react";
import Aboutt from "@/public/img/about.png";
import Image from "next/image";
const About = () => {
  return (
    <div>
      <section className="Sub-header relative">
        <h1 className="absolute inset-0 flex items-center justify-center text-center sm:m-0 ">
          About Us
        </h1>
      </section>

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world&quos;s largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <a href="#" className="hero_btn btn">
              EXPLORE NOW
            </a>
          </div>
          <div className="about-col">
            <Image src={Aboutt} alt="Aboutt" height={1000} width={1000} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
