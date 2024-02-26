import E_CONTENT_TYPE from "@/enums/ContentTypes";

interface IComments {
  id: string;
  authorId: string;
  postId: string;
  parentCommentId?: string;
  like: number;
  contentType: E_CONTENT_TYPE;
  mediaContent?: string | string[];
  content?: string;
  commitAt: Date | string;
  replay?:any;
  author: Record<string, string>;
}
export default IComments;
