import { useRelativeFormatter } from '@/hooks/use-relative-formatter';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'time'> & {
  date: string;
};
export const DateRelative = ({ date, ...rest }: Props) => {
  const formatedDate = useRelativeFormatter(date);
  return (
    <time dateTime={date} {...rest}>
      {formatedDate}
    </time>
  );
};
