// @flow

import type { Node } from "react";

import { Fragment } from "react";

type Props = {
  /**
   * If this is extremely urgent, use a high number (10+). If it is
   * not urgent at all, use a low number (0). Urgency is defined as time-sensitive.
   * If a task is highly urgent but not important, you don't need to do it!
   */
  urgency: number,
  /**
   * How important is this task? If it is extremely important, use a high number (10+). If it is
   * not important at all, use a low number (0). Importance is defined as the opportunity cost of not
   * doing something. If a task is highly important but not urgent, it might be worth pursuing over less
   * important items.
   */
  importance: number,
  title: string,
};

/**
 * @param {Props} props
 */
export default function Dot(props: Props): Node {
  return <Fragment />;
}
