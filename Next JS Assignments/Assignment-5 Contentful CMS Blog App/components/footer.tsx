"use client";
import Image from "next/image";
import Linkedin from "@/public/linkedin.svg";
import Github from "@/public/github.svg";
import Twitter from "@/public/twitter.svg";
import Facebook from "@/public/facebook.png";
import Link from "next/link";
import axios from "axios";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center m-5 mt-16 sm:m-10 rounded-2xl bg-black text-white ">
      <h3 className="px-4 mt-16 text-2xl font-medium text-center capitalize dark:font-bold lg:text-4xl sm:text-3xl">
        Curious about the latest in tech and web development?
      </h3>
      <p className="w-full px-4 mt-5 text-sm font-light text-center sm:w-3/5 sm:text-base dark:font-medium">
        Join me, Link seasoned Meta Certified Front End Developer merging AI
        with web design expertise. Subscribe and explore cutting-edge updates
        firsthand!
      </p>
      <form className="mt-6 w-fit sm:min-w-[384px] flex items-center bg-light p-1 sm:p-2 rounded mx-4">
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full pb-1 pl-2 mr-2 bg-transparent border-0 border-b text-dark focus:border-dark focus:ring-0"
        />

        <input
          type="submit"
          className="px-3 py-1 font-medium rounded cursor-pointer sm:px-5 bg-dark text-white border border-white"
        />
      </form>
      <div className="flex mt-8 item-center">
        <Link href={"https://www.linkedin.com/in/iamahmadsaboor/"}>
          <Image
            src={Linkedin}
            alt="Linkedin"
            className="inline-block w-6 h-6 mr-4 transition-all hover:scale-125 ease duration-250"
          />
        </Link>
        <Link href={"https://twitter.com/iamahmadsaboor"}>
          <Image
            src={Twitter}
            alt="Twitter"
            className="inline-block w-6 h-6 mr-4 transition-all hover:scale-125 ease duration-250"
          />
        </Link>
        <Link
          href="https://github.com/iamahmadsaboor"
          target="_blank"
          aria-label="Check my profile on Github"
        >
          <span className="inline-block w-6 h-6 mr-4">
            {/* <Github /> */}
          </span>
        </Link>

        <Link
          href={"https://facebook.com/iamahmadsaboor"}
          className="fill-light"
        >
          <Image
            src={Facebook}
            alt="Facebook"
            className="inline-block w-6 h-6 mr-4 transition-all hover:scale-125 ease duration-250"
          />
        </Link>
      </div>
      <div className="relative flex flex-col items-center justify-between w-full px-8 py-6 mt-16 font-medium border-t border-solid md:flex-row md:mt-24 border-light ">
        <span className="text-center">
          &copy;{date.getFullYear()} All Right Reserved
        </span>

        <div className="text-center">
          Made By -
          <Link
            href="https://iamahmadsaboor.vercel.app"
            className="underline"
            target="_blank"
          >
            Ahmad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
