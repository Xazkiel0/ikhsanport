"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function CobaAnimasi() {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <button
            className="toggle-container"
            style={{
                ...container,
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
    )
}

/**
 * ==============   Styles   ================
 */

const container = {
    width: 100,
    height: 50,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
}

const handle = {
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: "#9911ff",
    borderRadius: "50%",
}
