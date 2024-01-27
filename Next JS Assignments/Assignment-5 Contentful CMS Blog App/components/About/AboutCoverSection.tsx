import Image from "next/image";
import character from "@/public/character.png";
import ContactLottie from "./AnimationSlider";
const AboutCoverSection = () => {
  return (
    <section
      className="w-full md:h-[75vh] border-b-2 border-solid border-dark flex flex-col md:flex-row items-center justify-center text-dark dark:border-light dark:text-light
    "
    >
      <div className="flex justify-center w-full h-full border-r-2 border-solid md:w-1/2 border-dark dark:border-light">
        {/* <Image
          src={character}
          alt="character"
          className="object-contain object-center w-4/5 h-full md:w-full xs:w-3/4"
          priority
          sizes=" (max-width: 768px) 100vw,  (max-width: 1180px) 50vw, 50vw"
        /> */}
        <ContactLottie />
      </div>
      <div className="w-full pb-10 text-left xs:p-10 lg:px-16 md:w-1/1/2">
        <h2 className="text-2xl font-bold text-center capitalize sxl:text-6xl xs:text-5xl lg:text-left">
          About Me
        </h2>
        <p className="mt-4 text-base capitalize font-medium md:text-sm lg:text-base">
          Hey there! 👋 I am a dedicated Meta Certified Front End Developer with
          over a year of experience in web development. Currently studying at
          the University of Agriculture Faisalabad and diving into AI through
          PIAIC (Presidential Initiative for Artificial Intelligence &
          Computing). My journey in web development began with HTML, CSS, and
          JavaScript, allowing me to craft static web pages. Exploring deeper, I
          mastered frameworks like React for dynamic, interactive interfaces.
          I&apos; ve used Bootstrap and Tailwind CSS to create responsive, sleek
          websites adaptable to diverse devices. Through various front-end
          projects, I&apos; ve refined my technical skills and gained a keen eye
          for UI/UX design principles. Passionate about continuous learning,
          I&apos; m eager to merge my skills to craft beautiful, intuitive user
          experiences. AI has broadened my horizons, blending web development
          with artificial intelligence. Excited to share my projects and
          experiences! Feel free to connect for questions or collaborations.
          Let&apos; s create awesome digital experiences together! 😊✨
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
