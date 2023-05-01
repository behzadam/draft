export const PostDetailsSkeleton = () => {
  return (
    <div className="w-full py-4 mx-auto">
      <div className="flex space-x-4 animate-pulse">
        <div className="flex-1 py-1 space-y-3">
          <div className="h-8 rounded bg-slate-400"></div>
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 col-span-1 rounded bg-slate-400"></div>
            </div>
            <div className="grid gap-5 grid-cols">
              <div className="h-3 rounded bg-slate-400"></div>
              <div className="h-3 rounded bg-slate-400"></div>
              <div className="h-3 rounded bg-slate-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
