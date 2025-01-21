import Grid from "@/components/custom/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Rocket } from "lucide-react";
import { House } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center sm:items-start overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <House /> },
          { name: "Works", link: "/works", icon: <Rocket /> },
        ]} />
        <Hero />
        {/* <Grid /> */}
      </div>
    </main>
  );
}
