import { Icon } from '@iconify/react';
import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip';

const socialMedia = [
    {
        id: 1,
        name: "LinkedIn",
        designation: "Software Engineer",
        icon: (
            <Icon icon="streamline:linkedin" width="18" height="18" />
        )
    },
    {
        id: 2,
        name: "Github",
        designation: "Software Engineer",
        icon: (
            <Icon icon="entypo-social:github" width="18" height="18" />
        )
    },
    {
        id: 3,
        name: "Instagram",
        designation: "Software Engineer",
        icon: (
            <Icon icon="mdi:instagram" width="18" height="18" />
        )
    },
    {
        id: 4,
        name: "Facebook",
        designation: "Software Engineer",
        icon: (
            <Icon icon="la:facebook-f" width="18" height="18" />
        )
    },

];

const SocialMedia = () => {
    return (
        <>
            {
                socialMedia.map(sm => (
                    <AnimatedTooltip item={sm} key={sm.id}>
                        <div className="p-2 flex justify-center items-center hover:text-primary border hover:border-primary rounded-full cursor-pointer">
                            {sm.icon}
                        </div>
                    </AnimatedTooltip>
                ))
            }
        </>
    )
}

export default SocialMedia