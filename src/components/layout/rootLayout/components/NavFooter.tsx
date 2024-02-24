import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
export default function NavFooter() {
    return (


        <div className="px-8 border-t border-cPrimary-700">
            <ul className="w-full flex items-center justify-between  ">
                <li className="cursor-pointer   text-cPrimary-900 pt-5 pb-3">
                        <button aria-label="show notifications" className="focus:outline-none focus:ring-2 rounded   focus:ring-cPrimary-900 ">
                            <IoSettingsOutline />
                    </button>
                </li>
            </ul>
        </div>
    )
}
