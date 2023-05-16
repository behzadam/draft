'use client';

import { DateRelative } from '@/components/date';
import { useGetPostsDetails } from '../api/get-posts-details';
import { PostDetailsSkeleton } from './post-details-skeleton';

type Props = {
  slug: string;
};
export const PostDetails = ({ slug }: Props) => {
  const { result, isFetching } = useGetPostsDetails(slug);
  return (
    <>
      {isFetching ? (
        <PostDetailsSkeleton />
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
