import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-96 p-4 bg-white rounded-lg shadow-md" name="contact">
        <h1 className="text-3xl font-semibold mb-4 text-center">Contact Me</h1>
        <input type="hidden" name="form-name" value="contact" />
        <p className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 p-2 rounded w-full"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 p-2 rounded w-full"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="border border-gray-400 p-2 rounded w-full"
          ></textarea>
        </p>
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
