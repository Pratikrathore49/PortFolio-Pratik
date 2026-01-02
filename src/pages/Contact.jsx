import React from "react";
import GetInTouchComponents from "../components/sections/GetInTouchComponents";
import ContactForm from "../components/sections/ContactForm";

const Contact = () => {

  return (
    <section className="text-white bg-gray-900 min-h-screen px-4 md:px-[10vw] pt-20 pb-12">
      <div className="container mx-auto p-4 space-y-16">
        <h2 className="text-4xl  md:text-5xl uppercase font-bold text-center my-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent [text-shadow:0_0_0px_rgba(255,255,255,0.4)] ">
          Get in touch
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-16">
          Feel free to reach out through any of the following channels
        </p>

        <GetInTouchComponents />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
