import { Anchor, Text } from '@ui/atoms'

import projects from "./projects.json";

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
