import IComments from '@/interface/post/IComments'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'

export default function Comment({ comment }: { comment: IComments }) {
    return (
      
          <>
            <div className='flex items-start  gap-x-6'>
                <Image
                    width={40} height={40}
                    style={{
                        width: "30px",
                        height: "30px",

                    }}
                    src={comment.author.img}
                    className="aspect-video w-full  my-2 object-cover rounded-md"
                    alt=""
                />
                <div>
                    <span className='leading-3  '>
                        <p className='font-semibold  '>@{comment.author.userName}  </p>
                        <span className='text-xs font-normal' >{moment(comment.commitAt).calendar()}</span>
                    </span>
                    <p className='mt-1'>{comment.content}</p>
                </div>
            </div> 
            
          </>
    )
}
