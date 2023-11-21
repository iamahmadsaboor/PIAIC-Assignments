import Link from "next/link";
import Image from "next/image";
import Back1 from "../public/img/back1.png";
import Campus1 from "../public/img/Campus1.png";
import Campus2 from "../public/img/Campus2.png";
import Campus3 from "../public/img/Campus3.png";
import user from "../public/img/user.png";
import food from "../public/img/food.png";
import library from "../public/img/libary.png";
import playground from "../public/img/playground.png";
export default function Home() {
  return (
    <div>
      <section className="header">
        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut p orro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <a href="#" className="hero_btn">
            Visit Us To Know More
          </a>
        </div>
      </section>

      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>
          EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedi
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

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="campus-col">
            <Image src={Campus1} alt="Campus1" width={1000} height={1000} />
            <div className="layer">
              <h3>DELHI</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image src={Campus2} alt="Campus2" width={1000} height={1000} />
            <div className="layer">
              <h3>HYDERABAD</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image src={Campus3} alt="Campus3" width={1000} height={1000} />

            <div className="layer">
              <h3>MUMBAI</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Campus Section End --> */}

      {/* <!-- Facilities Section Start --> */}
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <Image src={library} alt="Libarary" width={1000} height={1000} />
            <h3>Best Libary</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image
              src={playground}
              alt="playground"
              width={1000}
              height={1000}
            />

            <h3>Athletics</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image src={food} alt="food" width={1000} height={1000} />

            <h3>Tasty and Healthy Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Facilities Section End --> */}

      {/* <!-- Testimonials Section Start --> */}
      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="testimonials-col">
            <Image src={user} alt="user" width={1000} height={1000} />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores in nostrum rerum voluptatem praesentium veritatis alias
                omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.
              </p>
              <h3>Student Name</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="testimonials-col">
            <Image src={user} alt="user" width={1000} height={1000} />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maiores in nostrum rerum voluptatem praesentium veritatis alias
                omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                deserunt. In quia repellat maxime.
              </p>
              <h3>Student Name</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact" className="hero_btn">
          CONTACT US
        </Link>
      </section>
    </div>
  );
}
