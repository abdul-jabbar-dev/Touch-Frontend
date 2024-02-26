interface IPost {
  id: string;
  post?: string;
  thumbnail?: string[] | string;
  postAt: string | Date;
  authorId: string;
}
export default IPost;
