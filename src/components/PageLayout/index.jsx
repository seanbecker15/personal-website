// @flow

import type { Node } from "react";
import "./styles.scss";

type Props = {
  children: Node,
  footerContent: Node,
};

export default function PageLayout(props: Props): Node {
  return (
    <div className="PageLayout">
      <div className="PageLayout__content">{props.children}</div>
      <div className="PageLayout__footer">
        {props.footerContent}
      </div>
    </div>
  );
}
