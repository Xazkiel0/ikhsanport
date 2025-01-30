"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { GridBackground } from "./ui/GridBackground";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import SocialMedia from "./custom/SocialMedia";
import { ContactMeModal } from "./custom/ContactMeModal";
import Link from "next/link";

const onConditions = {
  degree: "pursuing my degree at Airlangga University",
  seekingJob: "seeking opportunities as a Junior Web Developer",
  job: "contributing to impactful projects at [Nama Perusahaan]",
  freelance:
    "collaborating with clients to deliver custom web solutions as a freelancer",
};

const Hero = () => {
  return (
    <div className="">
      <div className="">
        <Spotlight
          className={"-top-40 -left-10 md:-top-20 md:-left-32 h-screen"}
          fill={"purple"}
        />
        <Spotlight
          className={"top-10 left-full h-80 md:h-[80vh] md:w-[20vw] -rotate-90"}
          fill={"blue"}
        />
        <Spotlight
          className={"-top-40 left-20 h-[180vh] w-[50vw]"}
          fill={"purple"}
        />
      </div>
      <GridBackground />
      <div className="flex justify-center relative z-10 h-dvh">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-widest text-xs md:text-2xl text-center font-extrabold text-white max-w-80">
            Hello, I am a
          </h2>
          <TextGenerateEffect
            className={"text-center text-[24px] md:text-2xl lg:text-4xl"}
            words={
              "Fullstack Web Developer | Crafting Website Experiences with Precision"
            }
          />
          <p className="text-center md:tracking-wider mb-4 text-xs md:text-lg lg:text-sm dark:text-white mt-2 md:mt-6">
            My name is{" "}
            <span className="px-1 bg-primary-foreground text-primary text-sm md:text-lg font-semibold rounded-sm">
              Ikhsan
            </span>
            , a Fullstack Web Developer based in Surabaya Indonesia.{" "}
            <span className="hidden md:block">
              Currently {onConditions.degree} and still focusing on honing my
              skills in web development and software engineering.
            </span>
          </p>
          <div className="flex text-white gap-2">
            <SocialMedia />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <ContactMeModal />
            <Link
              href="/ikhsan-cv.pdf"
              target="_blank"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md text-primary border border-primary bg-transparent bg-[linear-gradient(110deg,#000319,45%,#1e2631,55%,#000319)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
