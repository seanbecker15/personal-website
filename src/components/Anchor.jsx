// @flow

import type { Node } from "react";

type Props = {
  to: string,
  isExternal: boolean,
  children: Node,
};

export default function Anchor(props: Props): Node {
  return (
    <a
      href={props.to}
      target={props.isExternal ? "__blank" : undefined}
      referrerpolicy={props.isExternal ? "no-referrer" : undefined}
    >
      {props.children}
    </a>
  );
}
