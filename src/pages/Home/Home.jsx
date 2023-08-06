// @flow

import type { Node } from "react";
import { Link } from "react-router-dom";
import { Header, ProjectList, Section } from "@components";
import { Anchor, List, ListItem } from "@ui";

import "./styles.scss";

export default function Home(): Node {
  return (
    <div className="Home">
      <Header heading="Sean Becker" imgUrl="/assets/img/profile.jpg" />
      <Section heading="What I've been up to...">
        <List>
          <ListItem>
            <Link to="/job">Working on the Smart TV application at Fubo</Link>
          </ListItem>
          <ListItem>Experimenting with LLMs</ListItem>
          <ListItem>
            <Link to="/learning">Other things I'm learning about</Link>
          </ListItem>
        </List>
      </Section>
      <Section heading="Archive">
        <ProjectList filter={({ active }) => !active} />
      </Section>
      <Section heading="Contact / Resume / About">
        <List>
          <ListItem>
            <Anchor to="./assets/docs/resume.pdf">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="https://github.com/seanbecker15">GitHub</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="https://linkedin.com/in/seanmbecker">LinkedIn</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="https://twitter.com/TheSeanBecker">Twitter</Anchor>
          </ListItem>
        </List>
      </Section>

      <br />
      <div>
        <small>Last edited 6/12/2023</small>
      </div>
    </div>
  );
}
