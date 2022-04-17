import Anchor from "../../components/Anchor";
import Text from "../../components/Text";
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
