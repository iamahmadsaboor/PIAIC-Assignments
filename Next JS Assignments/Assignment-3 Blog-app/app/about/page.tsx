import AboutCoverSection from "@/components/AboutCoverSection";
import Skills from "@/components/Skills";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <AboutCoverSection />
      <Skills />
      <h2 className="self-start mx-5 mt-8 text-lg font-semibold lg:mx-20 xs:mx-10 md:mx-16 sm:mx-12 md:text-2xl text-dark dark:text-light dark:font-normal mb-20">
        Have a project in mind? Reach out to me 📞 from --
        <a
          className="!underline underline-offset-2"
          href="https://iamahmadsaboor.vercel.app"
          target="_blank"
        >
          here
        </a>
        --and lets make it happen.
      </h2>
    </div>
  );
};

export default About;
