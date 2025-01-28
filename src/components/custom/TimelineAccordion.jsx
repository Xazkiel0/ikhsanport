import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { CheckCircle2 } from 'lucide-react'
import TextHighlight from './TextHighlight'

const data = {
    "2018 - 2021": [
        {
            triggerTitle: "High School Education: ",
            title: "SMKN 1 Boyolangu",
            timeExact: "2018 - 2021",
            points: [
                "Building an online chat website based on ReactJS and Firebase NITC UM 2020",
                "Building a VueJS and Laravel-based banking and e-money website for schools",
                "Building a Codeigniter-based shoe store website for LSP Certification 2020",
                "Participated in Cordova Course at SMKN 1 Boyolangu in 2021",
                "Won 3rd place in artificial intelligence at the provincial level",
            ]
        },
        {
            triggerTitle: "Intenship: ",
            title: "Djunsoft",
            timeExact: "Sept 2018 - Mar 2021",
            points: [
                "Building Bioskop Ticket Order System",
                "Building Anime Streaming Website (HTML CSS Only)",
                "Learning Javascript, HTML & CSS",
            ]
        },
    ],
    "2023": [
        {
            triggerTitle: "Frontend Web Internship: ",
            title: "Gamelab Educa Studio",
            timeExact: "Sept 2023 - Dec 2023",
            points: [
                "Create a Company Profile Landing Page UI Design for small businesses (MSMEs) with Figma and the implementation with HTML & CSS",
                "Create a Dashboard Template UI Design using Figma.and the implementation with HTML & CSS",
                "Chosen to be the best of the week for website design and functionality.",
            ]
        },
        {
            triggerTitle: "Course: ",
            title: "IDCamp ML Engineer Path",
            timeExact: "Oct 2023 - Jan 2024",
            points: [
                "Data Visualization Module",
                "Basic Programming with Python Module",
                "Machine Learning for Beginners Module (Stage 1)",
                "Machine Learning Development Module (Stage 2)"
            ]
        },
    ],
    "2024": [
        {
            triggerTitle: "Internship: ",
            title: "PT. Saraswanti Utama",
            timeExact: "Aug 2024 - Dec 2024",
            points: [
                "Manage sitemap and traffic for the websites",
                "Researching keywords (SEO) and improving website loading speed for convenience uses",
            ]
        },
    ],
}
const TimelineAccordion = ({
    titleTime
}) => {
    if (!data[titleTime]) {
        return;
    }
    return (
        <Accordion type="single" collapsible className="w-full">
            {data[titleTime].map((item, idxItem) => (
                <AccordionItem value={`item-${idxItem}`} key={idxItem}>
                    <AccordionTrigger className="gap-8">
                        <div className='flex flex-col items-start gap-1 '>
                            <div className="">
                                {item.triggerTitle}
                                <TextHighlight>
                                    {item.title}
                                </TextHighlight>
                            </div>
                            <div className="time text-xs italic text-muted-foreground text-center ">
                                {item.timeExact}
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='flex flex-col gap-2 *:flex *:gap-3 *:items-start'>
                            {item.points.map((point, idxPoint) => (
                                <li key={idxPoint}>
                                    <div className="mt-1.5 md:mt-0">
                                        <CheckCircle2 width={18} height={18} />
                                    </div>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default TimelineAccordion