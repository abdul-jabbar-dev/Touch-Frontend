import { AiOutlineMessage } from "react-icons/ai";
import React from 'react'
import Image from "next/image";

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
        }, {
            name: "Nur Mohammad ",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        }, {
            name: "Nur Mohammad ",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        }, {
            name: "Nur Mohammad ",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        }, {
            name: "Nur Mohammad ",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        }, {
            name: "Nur Mohammad ",
            userName: "aliakbar",
            image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
        },
    ]
    return (
        <div className=' w-full '>
            <span className="text-cPrimary-800  text-lg w-full h-full font-semibold relative left-0">
                <div className="w-[300px] rounded-md border border-gray-200 bg-white py-4 px-2 ">
                    <div className="flex items-center justify-between px-2 text-base font-medium text-cPrimary-900">
                        <div>Friends</div>
                    </div>

                    <div className="mt-4">
                        <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">

                            <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-cPrimary-900">
                                <div className="flex w-16  h-12   overflow-hidden  items-center rounded-md bg-gray-200 text-black group-hover:bg-white">
                                    {/* <span className="  w-full h text-center text-2xl font-medium text-gray-700 group-hover:text-cPrimary-800">A</span> */}
                                    <Image
                                        alt="Profile Photo"
                                        width={80}
                                        height={80}
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                        }}
                                        className=" ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                                <div className=" items-center w-full  font-light text-gray-600 flex">
                                    <div className="flex-grow self-start text-start">
                                        <p className="text-[15px] group-hover:text-white">@abdulja</p>
                                        <span className="text-sm  font-semibold text-cPrimary-800 group-hover:text-white">Abdul Jabbar</span>
                                    </div> 
                                    <AiOutlineMessage className="group-hover:text-white" />
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
                {/* <a href="friends" className='top-0 right-0 text-sm  absolute hover:text-cPrimary-900'>See more..</a> */}
            </span>
        </div>
    )
}
