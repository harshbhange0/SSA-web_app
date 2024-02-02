import React from "react";
import Box from "./ui/Box";

import hero1Gif from "../assets/hero1-gif.gif";
import hero1GifDark from "../assets/hero1-gif-dark.gif";
import Dialog from "./ui/Dialog";
import { useTheme } from "../context/ThemeContext";
export default function Hero() {
  const { theme } = useTheme();
  return (
    <Box className="grid grid-cols-1 sm:grid-cols-2 md:px-[3rem] md:py-[5rem]">
      <div className="md:me-4">
        <img
          className="mx-auto w-[20rem] rounded-none object-contain transition-all dark:rounded-3xl sm:w-[25rem] md:w-[30rem]"
          src={theme == "light" ? hero1Gif : hero1GifDark}
          alt="hero1"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center md:ms-4">
        <h1 className="mb-5 break-words text-center font-sans text-xl font-semibold sm:text-xl md:text-2xl">
          Sharpen Your Skills: Ace High School Exams with Our Interactive Test
          Platform!{" "}
        </h1>
        <Dialog
          title="Register"
          className="text-xl font-semibold text-blue-600 underline transition-colors hover:text-blue-500"
        >
          Join our community of passionate learners and experts to enhance your
          learning journey!
        </Dialog>
      </div>
    </Box>
  );
}
