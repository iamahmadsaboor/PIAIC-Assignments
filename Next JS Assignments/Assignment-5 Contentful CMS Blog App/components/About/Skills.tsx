const skillSet = [
  "Next JS",
  "Tailwind CSS",
  "React",
  "Bootstrap",
  "Javascript",
  "CSS",
  "HTML",
];
const Skills = () => {
  return (
    <section className="flex flex-col w-full p-5 border-b-2 border-solid lg:p-20 xs:p-10 md:p-16 sm:p-12 border-dark text-dark dark:border-light dark:text-light">
      <span className="p-5 text-lg font-semibold md:text-4xl text-accent dark:text-accentDark md:p-16 sm:p-12 xs-p-10 sm:text-3xl">
        I am Comfortable in .. 
      </span>
      <ul className="flex flex-wrap justify-center mt-8 xs:justify-start">
        {skillSet.map((skill, index) => {
          return (
            <li
              key={index}
              className="inline-block px-4 py-2 mb-3 mr-3 text-base font-semibold capitalize transition-all duration-200 border-2 border-solid rounded cursor-pointer md:text-2xl sm:py-4 lg:py-5 sm:px-8 xs:px-6 lg:px-12 md:mb-6 md:mr-6 border-dark hover:scale-105 ease dark:border-light xs:mb-4 xs:mr-4 xs:py-3 sm:text-xl xs:text-lg dark:font-normal"
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
