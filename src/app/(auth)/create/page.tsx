"use client"
import FOrm from '@/components/parts/common/UI/fromUser/FOrm'
import INput from '@/components/parts/common/UI/fromUser/INput'
import Link from 'next/link';
import React from 'react'
import { AiOutlineLogin } from "react-icons/ai";

export default function page() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-cPrimary-800 text-2xl uppercase mb-5">Register an account</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <FOrm submitHandler={(e) => console.log(e)} className="px-5 py-7 w-full flex flex-col gap-y-1">
                        <INput label='Email' name='email' type="text" className="border rounded-lg text-sm w-full focus:border-cPrimary-800 focus:outline-cPrimary-800 focus:ring-cPrimary-800" />
                        
                        <br />
                        <button type="submit" className="transition duration-200 bg-cPrimary-800 hover:bg-cPrimary-800 focus:bg-cPrimary-900 focus:shadow-sm focus:ring-4 focus:ring-cPrimary-900 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span className="inline-block mr-2">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </FOrm>
                    <div className="py-5 w-full">
                        <div className="flex w-full justify-between">

                            <Link href={"/login"} className="transition flex items-center gap-x-2 duration-200 mx-5 px-2 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <AiOutlineLogin/>
                                <span className="">Login</span>
                            </Link> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
