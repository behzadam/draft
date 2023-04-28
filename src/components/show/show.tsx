export type Props = {
  when?: unknown;
};

/**
 * Declarative show/hide, as opposed to {foo && <Bar />}
 *    <Show when={foo}>
 *      <Bar />
 *    </Show>
 */
export const Show = (
  props: React.PropsWithChildren<Props>
): JSX.Element => {
  return <>{props.when ? props.children : null}</>;
};
