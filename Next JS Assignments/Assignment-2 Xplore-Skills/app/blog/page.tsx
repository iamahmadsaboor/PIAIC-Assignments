import React from "react";
import Post from "@/public/img/post.png";
import Image from "next/image";
const Blog = () => {
  return (
    <div>
      <section className="Sub-header relative">
        <h1 className="absolute inset-0 flex items-center justify-center text-center sm:m-0 ">
          Our Posts
        </h1>
      </section>
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <h2>Our Certificate & Online Program</h2>
            <h5>Aug 1, 2021</h5>
            <Image src={Post} alt="Post" width={1000} height={1000} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolor consequatur, nobis quae obcaecati delectus at
              aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum
              dolore velit odit cumque, quos doloribus sint id aperiam eius
              aliquam quo modi sequi rem quia exercitationem laborum, ratione
              expedita! Deleniti velit officia incidunt illum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>

            <div className="comment-box">
              <h3>Leave a Comment</h3>
              <form className="comment-form">
                <input type="text" placeholder="Enter Name" required />
                <input type="email" placeholder="Enter Email" required />
                <textarea placeholder="Your Comment"></textarea>
                <button type="submit" className="hero_btn btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>

          <div className="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytics</span>
              <span>12</span>
            </div>
            <div>
              <span>Machine Learning</span>
              <span>29</span>
            </div>
            <div>
              <span>Computer Science</span>
              <span>15</span>
            </div>
            <div>
              <span>Data Analytics</span>
              <span>22</span>
            </div>
            <div>
              <span>Full Stack</span>
              <span>20</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
