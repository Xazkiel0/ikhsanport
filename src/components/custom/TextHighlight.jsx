import React from 'react'

const TextHighlight = ({ children }) => {
    return (
        <span className="px-1 bg-primary-foreground text-primary rounded-sm">{children}</span>
    )
}

export default TextHighlight