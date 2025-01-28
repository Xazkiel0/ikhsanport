import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import TimelineAccordion from "./TimelineAccordion";
import TextHighlight from "./TextHighlight";

export function TimelineSection() {
    const data = [
        {
            title: "2025",
            content: (
                <div className="flex items-center h-full">
                    <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal italic">
                        On Progress
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <div className="mb-8 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        <TimelineAccordion titleTime="2024" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <div className="mb-8 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        <TimelineAccordion titleTime="2023" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-semibold">
                        <span className='flex flex-col items-start gap-1 mb-4'>
                            <div className="">
                                {"Bachelor Education: "}
                                <TextHighlight>
                                    Airlangga University
                                </TextHighlight>
                            </div>
                            <div className="time text-xs italic text-muted-foreground text-center ">
                                2022 - Present
                            </div>
                        </span>
                    </div>
                </div>
            ),
        },
        {
            title: "2018 - 2021",
            content: (
                <div>
                    <div className="mb-8 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
                        <TimelineAccordion titleTime="2018 - 2021" />
                    </div>
                </div>
            ),
        },
    ];
    return (
        (
            <div className="w-full z-50">
                <Timeline data={data} />
            </div>
        )
    );
}
