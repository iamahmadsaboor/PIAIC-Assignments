"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const ContactLottie = () => {
  return (
    <DotLottiePlayer
      src="/computer.lottie" // Assuming lottie.lottie is in the /public directory
      autoplay
      loop
      className="w-fit h-fit"
    ></DotLottiePlayer>
  );
};

export default ContactLottie;
