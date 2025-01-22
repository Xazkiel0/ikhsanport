import { Icon } from '@iconify/react';
import React from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip';

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