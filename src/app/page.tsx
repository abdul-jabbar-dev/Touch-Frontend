import PostLayout from "@/components/layout/postLayout/PostLayout";
import CreatePostContainer from "@/components/sections/post/CreatePostContainer";
import PostContainer from "@/components/sections/post/PostContainer";

export default function Home() {
  return (
    <PostLayout >
      <CreatePostContainer />
      <PostContainer />
    </PostLayout>
  );
}
