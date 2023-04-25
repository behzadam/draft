import { Post } from '../types/post';
import { PostListItem } from './post-list-item';

type Props = {
  posts: Post[];
};

export const PostList = ({
  posts
}: Props): JSX.Element => {
  return (
    <section className="grid grid-cols-1 divide-y">
      {posts.map((post) => {
        return <PostListItem post={post} key={post.id} />;
      })}
    </section>
  );
};
