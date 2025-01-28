"use server"

import mql from "@microlink/mql";

export async function fetchImg() {
    return await mql('https://www.netflix.com/title/80057281', {
        prerender: true,
        screenshot: true
    })
}