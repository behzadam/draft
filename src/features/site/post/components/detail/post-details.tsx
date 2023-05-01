import { PostDetailsDto } from '../../types/post-details-dto';

type Props = {
  post: PostDetailsDto;
};
export const PostDetails = ({ post }: Props) => {
  return (
    <article className="prose xl:prose-xl">
      <h2>{post.title}</h2>
      <time className="text">{post.createdAt}</time>
      <section>{post.content}</section>
    </article>
  );
};
