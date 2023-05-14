type Props = {
  show: React.ReactElement;
  until: boolean;
};

/**
 *  Declarative show skeleton until condition is true.
 *  <ShowUntil show={<Skeleton />} until={isLoading}>
 *    <Bar />
 *  </ShowUntil>
 */
export const ShowUntil = (
  props: React.PropsWithChildren<Props>
) => {
  return <>{props.until ? props.show : props.children}</>;
};
