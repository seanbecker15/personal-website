// @flow

import type { Node } from "react";

type Props = {
  children: Node,
};

export default function List(props: Props): Node {
  return <ul>{props.children}</ul>;
}
