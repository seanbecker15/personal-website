import { Helmet } from "react-helmet-async";

import { ProjectList } from '@ui/molecules';

export default function Archive() {
  return <div className="Archive">
    <Helmet>
      <title>Sean Becker - Archive</title>
    </Helmet>
    <h2>Archive</h2>
    <ProjectList filter={({ active }) => !active} />
  </div>;
}

export const archiveLoader = () => null;
