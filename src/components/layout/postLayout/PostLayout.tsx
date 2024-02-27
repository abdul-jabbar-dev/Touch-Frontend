import React from 'react'

export default function PostLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className='w-full h-full relative mx-auto '>
            <div className='w-full bg-cPrimary-800 z-50 sticky  top-0'>Head</div>
            {/* <div className=' h-min   top-0 overflow-x-hidden flex bg-red-500 '> */}
            {/* <div className=' w-60 flex justify-center'>sideLayout</div> */}

            <div className='h-full w-full  xl:w-[60%] mx-auto'>{children}</div>

        </div>
        // </div>
    )
}
