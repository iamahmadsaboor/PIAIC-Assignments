import React from "react";
import Link from "next/link";
import Image from "next/image";
import Back1 from "../public/Assets/back1.png";
import Campus1 from "../public/Assets/Campus1.png";
import Campus2 from "../public/Assets/Campus2.png";
import Campus3 from "../public/Assets/Campus3.png";
import user from "../public/Assets/user.png";
import food from "../public/Assets/food.png";
import library from "../public/Assets/libary.png";
import playground from "../public/Assets/playground.png";
// import Course2 from "../S"

type Props = {};

const course = (props: Props) => {
  return (
    <div>
      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col">
            <h3>Graduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col">
            <h3>Adult Learning & Degree Completion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
        </div>
      </section>

      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            {/* <img src="img/course1.png" alt=""/ > */}
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            {/* <Image src={} alt="course2"> */}
            <h3>Artificial Intelligence</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            {/* <img src="img/course3.png" alt=""> */}
            <h3>Data Science</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default course;
