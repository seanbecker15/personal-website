// @flow

import type { Node } from "react";

type Props = {
  children: Node,
};

export default function ListItem(props: Props): Node {
  return <li>{props.children}</li>;
}
