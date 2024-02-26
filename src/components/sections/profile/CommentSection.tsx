import IComments from '@/interface/post/IComments'
import React from 'react'
import Comment from './Comment'
import { AiOutlineComment } from 'react-icons/ai'
import InBuildInput from '@/components/parts/common/UI/fromUser/InBuildInput'

export default function CommentSection({ comments }: { comments: IComments[] }) {
    // console.log(comments)
    // let parseComment: (IComments & { replay?: Record<string, string> })[] = comments.filter(com => {

    // })

    return (
        <>
            <div className='flex flex-col gap-y-6 py-3'>
                {comments.map((com, i) => <Comment key={i} comment={com} />)}
            </div>
            <InBuildInput onSubmit={(e:any) => console.log(e.content)} buttonName='Post' placeholder='Add Comments' icon={<AiOutlineComment className='h-5 w-5' />} name='content' />
        </>
    )
}
