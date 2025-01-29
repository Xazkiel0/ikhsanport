"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { Vortex } from "../ui/vortex";
import SocialMedia from "./SocialMedia";

export function InputContact() {
  const placeholders = [
    "example@example.com",
    "johndoe@gmail.com",
    "example@example.com",
    "johndoe@gmail.com",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[30rem] flex flex-col justify-center  items-center px-4">
      <Vortex
        backgroundColor="#00000000"
        rangeY={200}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl font-semibold dark:text-white text-black">
          Let&apos;s work together.
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </Vortex>
    </div>
  );
}
