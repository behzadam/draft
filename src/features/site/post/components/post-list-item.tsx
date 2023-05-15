'use client';

import { DateRelative } from '@/components/date';
import Link from 'next/link';
import { Post } from '../types/post';

type Props = {
  post: Post;
};

export const PostListItem = ({
  post
}: Props): JSX.Element => {
  return (
    <article className="py-8">
      <DateRelative date={post.createdAt} />
      <h3>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h3>
    </article>
  );
};
