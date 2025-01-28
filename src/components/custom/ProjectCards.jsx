"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HoverEffect } from "../ui/card-hover-effect";
import { cn } from '@/lib/utils';

const projTabs = [
    {
        tabName: "All"
    },
    {
        tabName: "Web"
    },
    {
        tabName: "Mobile"
    },
]

const ProjectCards = () => {
    const [active, setActive] = useState(0)

    return (
        (<div className="max-w-5xl mx-auto">
            <div className="flex gap-2 flex-row items-center justify-center w-fit rounded-full mx-auto border border-slate-300 [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar p-2">
                {projTabs.map((tab, idx) => (
                    <button
                        className="relative px-4 py-2 rounded-full"
                        key={idx}
                        onClick={() => setActive(idx)}
                        disabled={idx == 2}
                    >
                        {active === idx && (
                            <motion.div
                                layoutId="projectTab"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 border border-primary rounded-full "
                                )}
                            />
                        )}
                        <span className={`relative block text-${active === idx ? "primary" : "white"}`}>
                            {tab.tabName}
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
        title: "Snack Business Order System",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://luring-form.vercel.app",
        stack: [
            "Next.js",
            "TailwindCSS",
            "ShadcnUI",
            "Zod",
            "ReactQuery",
            "Prisma",
            "PostgreSQL",
        ],
    },
    {
        title: "Hulu Clone",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://hulufromtutor.vercel.app",
        stack: [
            "Next.js",
            "TailwindCSS",
        ],
    },
    {
        title: "Small Business Company Profile: IlraCakeArt",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://gamelab-ilra-cakeart.vercel.app",
        stack: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Alpine.js",
            "Bootstrap5",
            "AOS",
        ],
    },
    {
        title: "Dashboard Template: Dashb",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://gamelab-dashboard-template.vercel.app",
        stack: [
            "HTML5",
            "CSS3",
            "JavaScript",
        ],
    },
];

export default ProjectCards


