"use client"
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { GridBackground } from './ui/GridBackground'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { GradientBackground } from './custom/GradBackground'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight className={"-top-40 -left-10 md:-top-20 md:-left-32 h-screen"} fill={"white"} />
        <Spotlight className={"top-10 left-[50%] h-[20vh] w-[20vw] -rotate-90"} fill={"purple"} />
        <Spotlight className={"-top-40 left-20 h-[180vh] w-[50vw]"} fill={"blue"} />
        <GradientBackground />
      </div>
      <GridBackground />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Dynamic Web Magic with Next.JS
          </h2>
          <TextGenerateEffect
            className={"text-center text-[40px] md:text-5xl lg:text-6xl"}
            words={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl dark:text-white">
            Hi, I&apos;m Ikhsan, a Fullstack Web Developer based in Surabaya Indonesia.
          </p>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000319,45%,#1e2631,55%,#000319)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Download CV
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero