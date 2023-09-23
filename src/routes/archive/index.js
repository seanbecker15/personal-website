import { ProjectList } from '@ui/molecules';

export default function Archive() {
  return <div className="Archive">
    <ProjectList filter={({ active }) => !active} />
  </div>;
}

export const archiveLoader = () => null;
