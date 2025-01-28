"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Icon } from "@iconify/react";

const stacks1 = [
    {
        title: "HTML5",
        icon: <Icon icon="bxl:html5" width="18" height="18" />
    },
    {
        title: "CSS3",
        icon: <Icon icon="bxl:css3" width="18" height="18" />
    },
    {
        title: "Javascript",
        icon: <Icon icon="ri:javascript-fill" width="18" height="18" />
    },
    {
        title: "PHP",
        icon: <Icon icon="akar-icons:php-fill" width="18" height="18" />
    },
    {
        title: "Python",
        icon: <Icon icon="lineicons:python" width="18" height="18" />
    },
    {
        title: "CSharp",
        icon: <Icon icon="devicon-plain:csharp" width="18" height="18" />
    },
]
const stacks2 = [
    {
        title: "TailwindCSS",
        icon: <Icon icon="bxl:tailwind-css" width="18" height="18" />
    },
    {
        title: "Bootstrap",
        icon: <Icon icon="simple-icons:bootstrap" width="18" height="18" />
    },
    {
        title: "React",
        icon: <Icon icon="flowbite:react-solid" width="18" height="18" />
    },
    {
        title: "Next.js",
        icon: <Icon icon="ri:nextjs-fill" width="18" height="18" />
    },
    {
        title: "Laravel",
        icon: <Icon icon="simple-icons:laravel" width="18" height="18" />
    },
    {
        title: "Expo",
        icon: <Icon icon="cib:expo" width="18" height="18" />
    },
    {
        title: "Flutter",
        icon: <Icon icon="simple-icons:flutter" width="18" height="18" />
    },
    {
        title: "Pandas",
        icon: <Icon icon="simple-icons:pandas" width="18" height="18" />
    },
    {
        title: "TensorFlow",
        icon: <Icon icon="cib:tensorflow" width="18" height="18" />
    },
].reverse()
const stacks3 = [
    {
        title: "MySQL",
        icon: <Icon icon="lineicons:mysql" width="18" height="18" />
    },
    {
        title: "PostgreSQL",
        icon: <Icon icon="bxl:postgresql" width="18" height="18" />
    },
    {
        title: "MongoDB",
        icon: <Icon icon="bxl:mongodb" width="18" height="18" />
    },
    {
        title: "Laragon",
        icon: <Icon icon="simple-icons:laragon" width="18" height="18" />
    },
    {
        title: "Postman",
        icon: <Icon icon="simple-icons:postman" width="18" height="18" />
    },
    {
        title: "Docker",
        icon: <Icon icon="simple-icons:docker" width="18" height="18" />
    },
    {
        title: "Matplotlib",
        icon: <Icon icon="devicon-plain:matplotlib" width="18" height="18" />
    },
]


export function MovingElements() {
    return (
        <div className="flex flex-col gap-4">
            <InfiniteMovingCards items={stacks1} direction="left" speed="20s" />
            <InfiniteMovingCards items={stacks2} direction="right" speed="22s" />
            <InfiniteMovingCards items={stacks3} direction="left" speed="24s" />
        </div>
    );
}

