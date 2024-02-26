import React from 'react' 
import Post from './Post';
import IPost from '@/interface/post/IPost';
export default function PostContainer() {
    const posts: IPost[] = [
        {
            id: "4234",
            authorId: "234",
            thumbnail: ["https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"],
            postAt: new Date(),
            post: "Sailboat UI helps streamline software projects, sprints, tasks, and bug tracking.",
        },{
            id: "4234",
            authorId: "234",
            thumbnail: ["https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"],
            postAt: new Date(),
            post: "Sailboat UI helps streamline software projects, sprints, tasks, and bug tracking.",
        },{
            id: "4234",
            authorId: "234",
            thumbnail: ["https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"],
            postAt: new Date(),
            post: "Sailboat UI helps streamline software projects, sprints, tasks, and bug tracking.",
        },
    ]
    return ( 
            <>
            {posts.map(post => <Post key={post.id} post={post} />)} 
            </>
 
    )
}
