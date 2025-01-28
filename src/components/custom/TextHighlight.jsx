import { cn } from '@/lib/utils'
import React from 'react'

const TextHighlight = ({ className, children }) => {
    return (
        <span className={cn("px-1 bg-primary-foreground text-primary rounded-sm", className)}>{children}</span>
    )
}

export default TextHighlight