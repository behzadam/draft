import { PostListItemSkeleton } from './post-list-item.skeleton';

type Props = {
  count?: number;
};
export const PostListSkeleton = ({ count = 4 }: Props) => {
  const posts = Array.from({ length: count });
  return (
    <>
      {posts.map((_, index) => {
        return <PostListItemSkeleton key={index} />;
      })}
    </>
  );
};
