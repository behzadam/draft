import { useFormatter } from 'next-intl';

export const useRelativeFormatter = (
  dateString: string
): string => {
  const format = useFormatter();
  const dateTime = new Date(dateString);
  const now = new Date();
  return format.relativeTime(dateTime, now);
};
