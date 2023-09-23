import { List, ListItem } from "@ui";
import { ProjectList } from '@components';

export default function Archive() {
  return <div className="Archive">
    <ProjectList filter={({ active }) => !active} />
  </div>;
}

export const archiveLoader = () => null;
