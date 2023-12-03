import Anchor from './legacy/components/Anchor';
import Text from './legacy/components/Text';
import projects from "./legacy/projects.json";

export default function ProjectList({ filter }) {
  return (
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
}
