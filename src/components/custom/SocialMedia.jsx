import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const socialMedia = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <Icon icon="streamline:linkedin" width="18" height="18" />,
    url: "https://www.linkedin.com/in/sayidul-ikhsan/",
  },
  {
    id: 2,
    name: "Github",
    icon: <Icon icon="entypo-social:github" width="18" height="18" />,
    url: "https://github.com/Xazkiel0",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <Icon icon="mdi:instagram" width="18" height="18" />,
    url: "https://www.instagram.com/ikhsan__ya",
  },
  {
    id: 4,
    name: "Tiktok",
    icon: <Icon icon="simple-icons:tiktok" width="18" height="18" />,
    url: "#",
  },
];

const SocialMedia = () => {
  let [active, setActive] = useState(null);
  return (
    <>
      {socialMedia.map((sm) => (
        <AnimatedTooltip item={sm} key={sm.id}>
          <AnimatePresence>
            <Link
              href={sm.url}
              target="_blank"
              onMouseEnter={() => setActive(sm.id)}
              onMouseLeave={() => setActive(null)}
              className="group p-2 flex justify-center items-center hover:text-primary border hover:border-primary relative rounded-full"
            >
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
            </Link>
          </AnimatePresence>
        </AnimatedTooltip>
      ))}
    </>
  );
};

export default SocialMedia;
