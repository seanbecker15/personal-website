import { Fragment, useEffect, useRef } from "react";
import * as Eisenhower from "@ui/molecules/EisenhowerMatrix";
import SitemapItem from "@ui/molecules/SitemapItem";
import { List, ListItem } from "@ui/atoms";

import "./styles.scss";

export default function Tasks() {
  return (
    <div className="Tasks">
      <h2>Tasks</h2>
      <List>
        <ListItem>Move to component library</ListItem>
        <ListItem>Add FuboTV SmartTV work</ListItem>
        <ListItem>Update things I am learning about</ListItem>
        <ListItem>Write a blog</ListItem>
      </List>
      <Eisenhower.Matrix size={300} xOffset={100} yOffset={100}>
        <Eisenhower.Dot urgency={0} importance={0} title="Example" />
      </Eisenhower.Matrix>
    </div>
  );
}
