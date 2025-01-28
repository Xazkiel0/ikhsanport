import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const socialMedia = [
    {
        id: 1,
        name: "LinkedIn",
        icon: (
            <Icon icon="streamline:linkedin" width="18" height="18" />
        )
    },
    {
        id: 2,
        name: "Github",
        icon: (
            <Icon icon="entypo-social:github" width="18" height="18" />
        )
    },
    {
        id: 3,
        name: "Instagram",
        icon: (
            <Icon icon="mdi:instagram" width="18" height="18" />
        )
    },
    {
        id: 4,
        name: "Tiktok",
        icon: (
            <Icon icon="simple-icons:tiktok" width="18" height="18" />
        )
    },

];

const SocialMedia = () => {
    let [active, setActive] = useState(null)
    return (
        <>
            {
                socialMedia.map(sm => (
                    <AnimatedTooltip item={sm} key={sm.id}>
                        <AnimatePresence>
                            <div
                                onMouseEnter={() => setActive(sm.id)}
                                onMouseLeave={() => setActive(null)}
                                className="group p-2 flex justify-center items-center hover:text-primary border hover:border-primary relative rounded-full cursor-pointer">
                                {active === sm.id && (
                                    <motion.span
                                        key={sm.id}
                                        layoutId="socmed"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.35 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.35, delay: 1 },
                                        }}
                                        className="absolute  -inset-1 -z-30 bg-primary-foreground rounded-full "
                                    />
                                )}
                                {sm.icon}
                            </div>
                        </AnimatePresence>
                    </AnimatedTooltip>
                ))
            }
        </>
    )
}

export default SocialMedia