"use client"
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { GridBackground } from './ui/GridBackground'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Icon } from '@iconify/react'
import { Github } from 'lucide-react'
import SocialMedia from './custom/SocialMedia'

const onConditions = {
  degree: "pursuing my degree at Airlangga University",
  seekingJob: "seeking opportunities as a Junior Web Developer",
  job: "contributing to impactful projects at [Nama Perusahaan]",
  freelance: "collaborating with clients to deliver custom web solutions as a freelancer"
}


const Hero = () => {
  return (
    <div className="">
      <div className="">
        <Spotlight className={"-top-40 -left-10 md:-top-20 md:-left-32 h-screen"} fill={"white"} />
        <Spotlight className={"top-10 left-full h-[80vh] w-[20vw] -rotate-90"} fill={"purple"} />
        <Spotlight className={"-top-40 left-20 h-[180vh] w-[50vw]"} fill={"blue"} />
      </div>
      <GridBackground />
      <div className="flex justify-center relative z-10 h-dvh">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className='tracking-widest text-xs md:text-2xl text-center font-extrabold text-white max-w-80'>
            Hello, I am a
          </h2>
          <TextGenerateEffect
            className={"text-center text-[24px] md:text-2xl lg:text-4xl"}
            words={"Fullstack Web Developer | Crafting Website Experiences with Precision"}
          />
          <p className="text-center md:tracking-wider mb-4 text-xs md:text-lg lg:text-sm dark:text-white mt-2 md:mt-6">
            My name is <span className='text-primary text-sm md:text-lg font-semibold'>Ikhsan</span>, a Fullstack Web Developer based in Surabaya Indonesia. <span className='hidden md:block'>
              Currently {onConditions.degree} and still focusing on honing my skills in web development and software engineering.
            </span>
          </p>
          <div className="flex text-white gap-2">
            <SocialMedia />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button className="shadow-[0_4px_14px_0_rgb(168,85,247,39%)] hover:shadow-[0_6px_20px_rgba(168,85,247,23%)] hover:bg-purple-700 px-8 py-2 bg-primary rounded-md text-white font-light transition duration-200 ease-linear">
              Contact Me
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md text-primary border border-primary bg-transparent bg-[linear-gradient(110deg,#000319,45%,#1e2631,55%,#000319)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-primary">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero