import { lazy } from "react";
import projects from "./projects.json";

const Anchor = lazy(() => import("../../components/Anchor"));
const Text = lazy(() => import("../../components/Text"));

const ProjectList = ({ filter }) => (
  <ul>
    {projects.filter(filter).map(({ title, url, external }) => (
      <li key={title}>
        {url ? (
          <Anchor to={url} isExternal={external}>
            {title}
          </Anchor>
        ) : (
          <Text>{title}</Text>
        )}
      </li>
    ))}
  </ul>
);

export default ProjectList;
