import { Helmet } from "react-helmet-async";

import { Anchor } from "@ui/atoms";

export function Component() {
  return (
    <div className="Education">
      <Helmet>
        <title>Sean Becker - Purdue</title>
      </Helmet>
      <h1>Sean Becker - Purdue</h1>
      <h2>Education</h2>
      For information on my education, you can{" "}
      <Anchor to="./assets/docs/resume.pdf">view my resume here</Anchor>.
    </div>
  );
}

export const loader = () => null;
