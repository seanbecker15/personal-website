import { Link } from "react-router-dom";
import ProjectList from "../../fragments/ProjectList/ProjectList";

export default function Home() {
  return (
    <>
      <div style={{ display: "inline-block" }}>
        <h1>Sean Becker</h1>
        <img
          id="profile"
          src="/assets/img/profile.jpg"
          style={{ width: "100%" }}
        />
      </div>
      <h2 title="Projects I am currently working on.">Projects (active)</h2>
      <ul>
        <li>
          <Link to="/learning">Current topics that I am learning about...</Link>
        </li>
      </ul>

      <h2 title="I'm not currently working on these projects.">
        Projects (inactive)
      </h2>
      <ProjectList filter={({ active }) => !active} />
      <div>
        <h3>Useful Links</h3>
        <div>
          <a href="./assets/docs/resume.pdf">Resume</a> &middot;
          <a href="https://github.com/seanbecker15">GitHub</a> &middot;
          <a href="https://linkedin.com/in/seanmbecker">LinkedIn</a> &middot;
          <a href="https://twitter.com/_seanbecker">Twitter</a>
        </div>
      </div>
      <br />
      <div>
        <small>Last edited 4/6/2022</small>
      </div>
    </>
  );
}
