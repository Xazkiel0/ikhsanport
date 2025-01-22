"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

export const AnimatedTooltip = ({
  item,
  children
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (<>
    <div
      className="relative group flex justify-center items-center"
      key={item.name}
      onMouseEnter={() => setHoveredIndex(item.id)}
      onMouseLeave={() => setHoveredIndex(null)}>
      {children}
      <AnimatePresence mode="popLayout">
        {hoveredIndex === item.id && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              whiteSpace: "nowrap",
            }}
            className="absolute -top-12 -left-1/2  flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2">
            <div className="font-bold text-white relative z-30 text-base">
              {item.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </>);
};
