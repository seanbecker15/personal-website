import { Link, Outlet } from "react-router-dom";
import { Header, ProjectList, Section } from "@components";
import { Anchor, List, ListItem } from "@ui";

import "./styles.scss";

export default function Root() {
  return (
    <div className="Root">
      <Outlet />

      <br />
      <div>
        <small>Last edited 6/12/2023</small>
      </div>
    </div>
  );
}

export const rootLoader = () => null;
