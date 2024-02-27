import React from 'react'
import ActiveChats from './ActiveChats'
import UserSearchBar from './UserSearchBar'

export default function LeftBar() {
    return (
        <>
            <section className="  flex grow flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll">
            <UserSearchBar />
            <ActiveChats />               
            </section>
        </>
    )
}
