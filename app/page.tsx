"use client"

import dynamic from "next/dynamic";
import React from "react";
import "bootstrap/dist/css/bootstrap.css"

export default function Page() {

    const Content = dynamic(() => import('./content'), {
        ssr: false,
    })

    return <>
        <Content />
    </>
}