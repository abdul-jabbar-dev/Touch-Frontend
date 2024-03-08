"use client"
import tost from '@/components/notify/tost'
import FOrm from '@/components/parts/common/UI/fromUser/FOrm'
import INput from '@/components/parts/common/UI/fromUser/INput'
import ILoginData from '@/interface/user/auth/ILoginData'
import { useUserLoginMutation } from '@/redux/api/user@auth/auth'
import Link from 'next/link'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { ToastContainer } from 'react-toastify'

export default function Page() {
    const [LoginUser, data2] = useUserLoginMutation()

    const handleLogin = async (loginData: ILoginData) => {
        const { data } = await tost(LoginUser(loginData), {}) 
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-cPrimary-800 text-2xl uppercase mb-5">Login</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    < ToastContainer />
                    <FOrm submitHandler={(data: ILoginData) => handleLogin(data)} className="px-5 py-7 w-full flex flex-col gap-y-1">
                        <INput label='Email' name='email' type="text" className="border rounded-lg text-sm w-full focus:border-cPrimary-800 focus:outline-cPrimary-800 focus:ring-cPrimary-800" />
                        <INput label='Password' name='password' type="text" className="border rounded-lg text-sm w-full focus:border-cPrimary-800 focus:outline-cPrimary-800 focus:ring-cPrimary-800" />
                        <br />
                        <button type="submit" className="transition duration-200 bg-cPrimary-800 hover:bg-cPrimary-800 focus:bg-cPrimary-900 focus:shadow-sm focus:ring-4 focus:ring-cPrimary-900 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span className="inline-block mr-2">Login</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </FOrm>
                    <div className="py-5 w-full">
                        <div className="flex w-full justify-between">

                            <button className="transition duration-200 mx-5 px-2 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>
                                <span className=""> Forgot Password</span>
                            </button>

                            <Link href={"/create"} className="transition duration-200 flex items-center mx-5   px-2  py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <BiPlus className='w-5  h-5' size={20} />
                                <span className=" "> Create an account</span>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
