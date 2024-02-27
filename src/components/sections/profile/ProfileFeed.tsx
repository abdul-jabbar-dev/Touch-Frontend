import PostContainer from "../post/PostContainer";


 
export default function ProfileFeed() {
  return (
      <div className="  w-full h-full overflow-y-scroll px-3 ">
         {/* <Friends/> */}
        <PostContainer/>
      </div>
  )
}
