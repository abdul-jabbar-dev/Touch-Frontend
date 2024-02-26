"use client"
import Slider from '@/components/parts/common/UI/Slider'
import E_CONTENT_TYPE from '@/enums/ContentTypes'
import IComments from '@/interface/post/IComments'
import IPost from '@/interface/post/IPost'
import moment from 'moment'
import { AiFillLike } from 'react-icons/ai'
import { FaRegCommentAlt } from 'react-icons/fa'
import Comment from '../sections/profile/Comment'
import CommentSection from '../sections/profile/CommentSection'
import FOrm from '@/components/parts/common/UI/fromUser/FOrm'
import { BaseSyntheticEvent } from 'react'
import INput from '@/components/parts/common/UI/fromUser/INput'
import InBuildInput from '@/components/parts/common/UI/fromUser/InBuildInput'
import { AiOutlineComment } from "react-icons/ai";


export default function Post({ post }: { post: IPost }) {
    const comments: IComments[] = [
        {
            id: "45",
            authorId: '1',
            postId: '45',
            like: 9,
            contentType: E_CONTENT_TYPE.TEXT,
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem unde id beatae in nobis soluta.",
            commitAt: new Date(),
            author: {
                name: "Abdul Jabbar",
                userName: "abdulJ",
                img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
        }, {
            id: "77",
            authorId: '3',
            postId: '45',
            like: 9,
            parentCommentId: '45',
            contentType: E_CONTENT_TYPE.TEXT,
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
            commitAt: new Date(),
            author: {
                name: "Abdul Jabbar",
                userName: "abdulJ",
                img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            }
        }
    ]
    return (
        <div className="mx-auto  h-max overflow-y-scroll text-cPrimary-900  rounded-lg bg-white shadow my-2">

            {
                post?.thumbnail && <Slider img={post.thumbnail} />
            }
            <div className="p-4">
                <p className="mb-1 text-sm text-cPrimary-800"> At. <time>{moment(post.postAt).calendar()}</time></p>
                <p className="mt-1 mb-3 text-xl font-medium ">{post?.post}</p>
                <div className="mt-2 flex gap-2 justify-between">

                    <span className=" flex items-center gap-x-2 px-2 py-1 text-3xl font-semibold  ">
                        <AiFillLike />
                        <span className='text-sm'>2 Like</span>
                    </span>

                    <span className="  px-2 py-1 text-3xl font-semibold  ">
                        <FaRegCommentAlt />
                    </span>
                </div>
                <div className='p-3 '>
                    {
                        <CommentSection comments={comments} />
                    } {
                        
                    }
                </div>
            </div>
        </div>
    )
}
