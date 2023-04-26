import Link from 'next/link';
import { Post } from '../types/post';

type Props = {
  post: Post;
};

export const PostListItem = ({
  post
}: Props): JSX.Element => {
  return (
    <article className="py-4">
      <h3>
        <Link href="#">{post.title}</Link>
      </h3>
      <div className="text-xs text-gray-600">
        {post.createdAt}
      </div>
    </article>
  );
};
