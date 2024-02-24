import React from 'react'

export default function PostLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className=''>
            <div className='w-full bg-blue-400 '>Head</div>
            <div className='h-full overflow-x-hidden flex bg-red-500'>
                <div className=' w-60 flex justify-center'>sideLayout</div>
                <div className=' w-full'>
                    <div className='h-full w-full'>{children}</div>
                </div>
            </div>
        </div>
    )
}
