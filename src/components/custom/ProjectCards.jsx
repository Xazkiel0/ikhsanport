"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HoverEffect } from "../ui/card-hover-effect";
import { cn } from '@/lib/utils';

const items = [
    {
        id: 1,
        nm: "Asd1"
    },
    {
        id: 2,
        nm: "Asd2"
    },
    {
        id: 3,
        nm: "Asd3"
    },
]

const ProjectCards = () => {
    const [active, setActive] = useState(1)
    return (
        (<div className="max-w-5xl mx-auto px-8">
            <div className="flex gap-2 flex-row items-center justify-center bg-black [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar p-2">
                {items.map(item => (

                    <button
                        className="relative px-4 py-2 rounded-full"
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {active === item.id && (
                            <motion.div
                                layoutId="projectTab"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full "
                                )}
                            />
                        )}
                        <span className="relative block text-black dark:text-white">
                            {item.nm}
                        </span>
                    </button>
                ))}
            </div>
            <HoverEffect items={projects} />
        </div>)
    )
}

export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];

export default ProjectCards


