// @flow

import type { Node } from "react";

type Props = {
  children: Node,
};

export default function Text(props: Props): Node {
  return <div>{props.children}</div>;
}
