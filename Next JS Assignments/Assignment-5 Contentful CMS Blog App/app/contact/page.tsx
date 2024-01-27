import LottieAnimation from "@/components/Contact/AnimationSide";
import ContactForm from "@/components/Contact/ContactForm";

const ContactPage = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark flex flex-col md:flex-row items-center justify-center text-dark dark:border-light dark:text-light h-auto">
      <div className="inline-block w-full h-full border-solid md:border-r-2 md:w-2/5 border-dark dark:border-light sm:w-4/5">
        <LottieAnimation />
      </div>
      <div className="w-full px-5 pb-8 md:px-16 lg:px-8 lg:pl-16 md:w-3/5 lg:w-1/2 xs:px-10">
        <h2 className="text-2xl font-bold capitalize xs:text-3xl sm:text-4xl">
          Let&apos; s Connect
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
