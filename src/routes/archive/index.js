import { ProjectList } from '@ui/molecules';

export default function Archive() {
  return <div className="Archive">
    <h2>Archive</h2>
    <ProjectList filter={({ active }) => !active} />
  </div>;
}

export const archiveLoader = () => null;
