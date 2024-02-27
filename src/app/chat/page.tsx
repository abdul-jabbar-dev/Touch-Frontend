"use client"
import InBuildInput from '@/components/parts/common/UI/fromUser/InBuildInput'
import LeftBar from '@/components/sections/chat/leftBar/LeftBar'
import RightBar from '@/components/sections/chat/rightBar/RightBar'
import React from 'react'

export default function page() {
    return (
        <main className="flex w-full   h-screen shadow-lg rounded-3xl">

            <LeftBar />
            <RightBar />
        </main>
    )
}
