"use client"
import React, { useEffect, useRef } from 'react'
import Items from './components/Items';
import Search from '@/components/parts/common/UI/Search';
import NavFooter from './components/NavFooter';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const sideBar = useRef<HTMLDivElement | null>(null);
    const openSidebar = useRef<HTMLButtonElement | null>(null);
    const closeSidebar = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        sideBar.current!.style.transform = "translateX(-260px)";
    }, [])

    function sidebarHandler(flag: boolean) {
        if (flag) {
            sideBar.current!.style.transform = "translateX(0px)";
            openSidebar.current!.classList.add("hidden");
            closeSidebar.current!.classList.remove("hidden");
        } else {
            sideBar.current!.style.transform = "translateX(-260px)";
            closeSidebar.current!.classList.add("hidden");
            openSidebar.current!.classList.remove("hidden");
        }
    }
    let head = "TOUCH"

    return ( 
            <div className="w-full h-screen  overflow-hidden">
                <div className="flex flex-no-wrap h-full">

                    {/* <!-- Sidebar starts -->  */}


                    <div   className="w-max absolute sm:relative  shadow md:h-full flex-col justify-between hidden sm:flex">

                        <div className="px-8 flex flex-col h-full flex-grow">
                            <div className="h-16 w-full flex items-center ">
                                {head}
                            </div>
                            <div className='flex-grow h-full flex flex-col'>
                                <span className='flex-grow h-full'>
                                    <Items />
                                </span>
                                <Search />
                            </div>
                        </div>
                        <NavFooter />
                    </div>
                    <div className="w-64 z-40 absolute  shadow h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out" ref={sideBar}  >
                        <button aria-label="toggle sidebar" ref={openSidebar} className="h-10 w-10  absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-cPrimary-800" onClick={() => sidebarHandler(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinejoin="round"  >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="6" cy="10" r="2" />
                                <line x1="6" y1="4" x2="6" y2="8" />
                                <line x1="6" y1="12" x2="6" y2="20" />
                                <circle cx="12" cy="16" r="2" />
                                <line x1="12" y1="4" x2="12" y2="14" />
                                <line x1="12" y1="18" x2="12" y2="20" />
                                <circle cx="18" cy="7" r="2" />
                                <line x1="18" y1="4" x2="18" y2="5" />
                                <line x1="18" y1="9" x2="18" y2="20" />
                            </svg>
                        </button>
                        <button aria-label="Close sidebar" ref={closeSidebar} className="hidden h-10 w-10  absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white" onClick={() => sidebarHandler(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round"  >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <div className="flex flex-col h-full">
                            <div className="px-8 flex flex-col grow">
                                <div className="  w-full flex items-center ">
                                    {head}
                                </div>
                                <div className='flex grow flex-col'>
                                    <span className='grow '>
                                        <Items />
                                    </span>
                                    <Search />
                                </div>
                            </div>
                            <div className="px-8 border-t border-cPrimary-900">
                                <NavFooter />
                            </div>
                        </div>
                    </div> 
                    {/* <!-- Sidebar ends -->
                  <!-- Remove class [ h-64 ] when adding a card block --> */}


                    <div className="  h-screen w-full ">
                        <div className="w-full h-full rounded px-10 mx-auto flex justify-center overflow-y-scroll ">
                            {/* <!-- Place your content here --> */}
                            {children}
                        </div>
                    </div>
                </div>
            </div> 
    )
}
