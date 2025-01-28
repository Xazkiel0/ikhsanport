"use client"
import { fetchImg } from '@/app/actions'
import Image from 'next/image'
import { encode } from 'qss'
import React, { useEffect, useState } from 'react'

const ProjectImage = ({ url, className }) => {
    const [imgUrl, setImgUrl] = useState(null)
    useEffect(() => {
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            "viewport.isMobile": true,
            "viewport.deviceScaleFactor": 1,
        });
        const src = `https://api.microlink.io/?${params}`;
        setImgUrl(src)

    }, [])
    return (
        <div>
            <img src={imgUrl} width={500} height={500} alt='sdsd' />
        </div>
    )
}

export default ProjectImage