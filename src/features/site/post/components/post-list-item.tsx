import { Link } from '@/components/link';
import { Post } from '../types/post';

type Props = {
  post: Post;
};

export const PostListItem = ({
  post
}: Props): JSX.Element => {
  return (
    <article>
      <h3 className="text-2xl font-bold leading-8 tracking-tight">
        <Link href="#">{post.title}</Link>
      </h3>
      <div className="prose text-gray-500 max-w-none dark:text-gray-400">
        {post.createdAt}
      </div>
    </article>
  );
};
