import CobaAnimasi from "@/components/custom/CobaAnimasi";
import { MovingElements } from "@/components/custom/MovingElements";
import ProjectCards from "@/components/custom/ProjectCards";
import { TimelineSection } from "@/components/custom/TimelineSection";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Rocket } from "lucide-react";
import { House } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center sm:items-start overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full flex flex-col gap-12 md:mx-auto">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <House /> },
          { name: "Works", link: "/works", icon: <Rocket /> },
        ]} />
        <Hero />
        <MovingElements />
        <TimelineSection />
        {/* <div className="mt-40 flex flex-col text-white">
          <span>Technology Used</span>
          <div className="flex">
            s
          </div>
        </div> */}
        <ProjectCards />
        {/* <Grid /> */}
      </div>
    </main>
  );
}
