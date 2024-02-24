import React from 'react'
import { MdEdit, MdWork } from 'react-icons/md'
import { IoLogoTwitter } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
export default function Details() {
    return (
        <div>

            <div className=" border px-6 py-3 my-3 rounded-2xl">
                <span className="text-cPrimary-800 text-lg  font-semibold">
                    Workplace
                </span>
                <div className="flex items-center gap-x-4 my-2 text-cPrimary-900">
                    <span> <MdWork size={16} /></span>
                    <span>Frontend developer at SPDI</span>
                </div>
                <div className="flex items-center gap-x-4 my-2 text-cPrimary-900">
                    <span> <MdWork size={16} /></span>
                    <span>Frontend developer at SPDI</span>
                </div>
                <button className="p-1 text-center rounded-full w-full bg-cPrimary-900 text-white text-sm  mt-6 mb-2 flex items-center gap-x-2 justify-center  "><MdEdit color="#fff" className="text-white" />Edit workplace</button>
            </div>

            <div className=" border px-6 py-3  rounded-2xl">
                <span className="text-cPrimary-800 text-lg  font-semibold">
                    Social Media
                </span>
                <div className="flex items-center gap-x-4 my-2 text-cPrimary-900">
                    <span> <IoLogoTwitter size={16} /></span>
                    <span>Frontend developer at SPDI</span>
                </div>
                <div className="flex items-center gap-x-4 my-2 text-cPrimary-900">
                    <span> <AiFillInstagram size={16} /></span>
                    <span>Frontend developer at SPDI</span>
                </div>
                {/* <span className="p-2 rounded-full    text-3xl mt-2 flex items-center gap-x-2"><MdEdit color="red" className="!text-red-700"/></span> */}
                <button className="p-1 text-center rounded-full w-full bg-cPrimary-900 text-white text-sm  mt-6 mb-2 flex items-center gap-x-2 justify-center  "><MdEdit color="#fff" className="text-white" />Edit Social Links</button>
            </div>



        </div>
    )
}
