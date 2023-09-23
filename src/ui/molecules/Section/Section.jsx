// @flow

import type { Node } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

type Props = {
  heading: string,
  children: Node,
};

export default function Section(props: Props): Node {
  const { heading, children } = props;

  return (
    <div className="Section">
      <h2>{heading}</h2>
      <div className="Section__content">
        {children}
      </div>
    </div>
  );
}
