// @flow

import type { Node } from "react";
import "./styles.scss";

type Props = {
  children: Node,
};

export default function Footer(props: Props): Node {
  return <div className="Footer">{props.children}</div>;
}
