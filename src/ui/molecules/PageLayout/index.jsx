// @flow

import type { Node } from "react";
import "./styles.scss";

type Props = {
  children: Node,
  footerContent: Node,
};

export default function PageLayout(props: Props): Node {
  const { children, footerContent } = props;
  return (
    <div className="PageLayout">
      <div className="PageLayout__content">{children}</div>
      <div className="PageLayout__footer">{footerContent}</div>
    </div>
  );
}
