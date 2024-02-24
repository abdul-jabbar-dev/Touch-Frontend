import Image from 'next/image'
import React from 'react'

export default function Friends() {
    const friends = [
        {
            name: "Ali akbar",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        }, {
            name: "Ali akbar",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        }, {
            name: "Ali akbar",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        }, {
            name: "Nur Mohammad ",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        },
    ]
    return (
        <div className='border px-6 py-3 rounded-2xl'>
            <span className="text-cPrimary-800 text-lg  font-semibold">
                Friends
                <div className='flex gap-x-6 my-2'>

                    {friends.map((friend, i) => <div key={i} className=' px-1 flex justify-center flex-col items-center content-center'>
                        <div className='w-12 h-12 rounded-full overflow-hidden '>
                            <Image width={80} height={80} className='  w-full h-full  ring-2 ring-white' alt='Friends List' src={friend.image} />
                        </div>
                        <span className='flex justify-center flex-col items-center my-2 '>
                            <p className='m-0 '>@{friend.userName}</p>
                            <h4 className='m-0 text-sm font-light '>{friend.name}</h4>
                        </span>
                    </div>)}


                </div>
            </span>
        </div>
    )
}
