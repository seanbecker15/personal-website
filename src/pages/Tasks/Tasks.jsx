import { Fragment, useEffect, useRef } from "react";
import * as Eisenhower from "../../components/EisenhowerMatrix";
import SitemapItem from "../../components/SitemapItem";
import "./styles.scss";

export default function Tasks() {
  return (
    <div className="Tasks">
      <Eisenhower.Matrix size={300} xOffset={100} yOffset={100}>
        <Eisenhower.Dot urgency={0} importance={0} title="Example" />
      </Eisenhower.Matrix>
    </div>
  );
}
