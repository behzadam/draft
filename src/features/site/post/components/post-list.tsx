import { Post } from '../types/post';
import { PostListItem } from './post-list-item';

type Props = {
  posts: Post[];
};

export const PostList = ({
  posts
}: Props): JSX.Element => {
  return (
    <section className="grid max-w-md grid-cols-1 mx-auto divide-y divide-gray-100">
      <h1 className="py-6 text-xl font-bold">Posts</h1>
      {posts.map((post) => {
        return <PostListItem post={post} key={post.id} />;
      })}
    </section>
  );
};
