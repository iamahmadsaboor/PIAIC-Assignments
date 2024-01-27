"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };

  const clearInputs = () => {
    setEmail("");
    setFullName("");
    setMessage("");
  };
  return (
    <div>
      <form
        className="flex flex-col gap-5 py-4 mt-4 border-t"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="fullname" className="block">
            Name:
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Ahmad Saboor"
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            className="w-full text-black text-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="ahmad@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full text-black text-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type Here"
            className="w-full h-32 text-black text-md"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-3 font-semibold text-white bg-purple-500 dark:text-black dark:bg-yellow-300"
          onClick={clearInputs}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
