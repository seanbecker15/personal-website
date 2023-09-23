import { Anchor } from "@ui/atoms";

export default function Education() {
  return (
    <div className="Education">
      <h2>Education</h2>
      For information on my education, you can{" "}
      <Anchor to="./assets/docs/resume.pdf">view my resume here</Anchor>.
    </div>
  );
}

export const educationLoader = () => null;
