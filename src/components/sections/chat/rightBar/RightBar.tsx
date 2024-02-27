import React from 'react'
import InboxHeader from './InboxHeader'
import Conversations from './Conversations'
import MessageSendTools from './MessageSendTools'

export default function RightBar() {
    return (
        <>
            <section className="w-8/12 grow px-4 flex flex-col bg-white rounded-r-3xl">
            <InboxHeader />
            <Conversations />
            <MessageSendTools /> 
            </section>


        </>
    )
}
