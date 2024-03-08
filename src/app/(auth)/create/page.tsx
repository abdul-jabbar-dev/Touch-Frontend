"use client"
import FOrm from '@/components/parts/common/UI/fromUser/FOrm'
import INput from '@/components/parts/common/UI/fromUser/INput'
import { useUserInitMutation } from '@/redux/api/user@auth/auth';
import Link from 'next/link';
import React from 'react'
import { AiOutlineLogin } from "react-icons/ai";

export default function Page() {
    const [initUser, { isLoading, data, isSuccess }] = useUserInitMutation()
    const handleLogin = async (loginData: { email: string }) => {
        const res = await initUser(loginData) 
    }   
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-cPrimary-800 text-2xl uppercase mb-5">Register an account</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <FOrm submitHandler={(data) => handleLogin(data)} className="px-5 py-7 w-full flex flex-col gap-y-1">
                        <INput label='Email' name='email' type="text" className="border rounded-lg text-sm w-full focus:border-cPrimary-800 focus:outline-cPrimary-800 focus:ring-cPrimary-800" />

                        <br />
                        <button type="submit" className="transition flex items-center justify-center mx-auto duration-200 bg-cPrimary-800 hover:bg-cPrimary-800 focus:bg-cPrimary-900 focus:shadow-sm focus:ring-4 focus:ring-cPrimary-900 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            {isLoading ?
                                <> <div role="status ">
                                    <svg aria-hidden="true" className="w-[20px] h-[20px] text-gray-200 animate-spin dark:text-gray-600 fill-cPrimary-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div></>
                                : <> <span className="inline-block mr-2">Next</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg></>}
                        </button>
                    </FOrm>
                    <div className="py-5 w-full">
                        <div className="flex w-full justify-between">

                            <Link href={"/login"} className="transition flex items-center gap-x-2 duration-200 mx-5 px-2 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <AiOutlineLogin />
                                <span className="">Login</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
