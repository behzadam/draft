const PostListItemSkeleton = () => {
  return (
    <div className="w-full py-4 mx-auto">
      <div className="flex space-x-4 animate-pulse">
        <div className="flex-1 py-1 space-y-3">
          <div className="h-4 rounded bg-slate-400"></div>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 col-span-1 rounded bg-slate-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
