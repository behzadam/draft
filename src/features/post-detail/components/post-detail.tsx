'use client';

import { DateRelative } from '@/components/date';
import { useGetPostDetail } from '../hooks/use-get-post-detail';
import { PostDetailSkeleton } from './post-detail-skeleton';

type Props = {
  slug: string;
};
export const PostDetail = ({ slug }: Props) => {
  const { result, isFetching } = useGetPostDetail(slug);
  return (
    <>
      {isFetching ? (
        <PostDetailSkeleton />
      ) : (
        result?.data && (
          <article className="container prose xl:prose-xl">
            <header className="py-8">
              <h2 className="text-4xl">
                {result.data.title}
              </h2>
              <DateRelative
                className="text-xs"
                date={result.data.createdAt}
              />
            </header>
            <section>{result.data.content}</section>
          </article>
        )
      )}
    </>
  );
};
