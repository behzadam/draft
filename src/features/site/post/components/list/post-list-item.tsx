'use client';

import { useFormatter } from 'next-intl';
import Link from 'next/link';
import { Post } from '../../types/post';

type Props = {
  post: Post;
};

export const PostListItem = ({
  post
}: Props): JSX.Element => {
  const format = useFormatter();
  const dateTime = new Date(post.createdAt);
  const now = new Date();
  return (
    <article className="py-8">
      <time className="text-xs text-gray-600">
        {format.relativeTime(dateTime, now)}
      </time>
      <h3>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h3>
    </article>
  );
};
