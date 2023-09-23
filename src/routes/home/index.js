import { Link } from "react-router-dom";
import { Header, ProjectList, Section } from "@components";
import { Anchor, List, ListItem } from "@ui";

import "./styles.scss";

export default function Home() {
  return (
    <div className="Home">
      <Header heading="Sean Becker" imgUrl="/assets/img/profile.jpg" />
      <Section heading="Main links">
        <List>
          <ListItem>
            <Link to="/experience">Professional experience</Link>
          </ListItem>
          <ListItem>
            <Link to="/education">Education</Link>
          </ListItem>
          <ListItem>
            <Link to="/about-me">About me</Link>
          </ListItem>
          <ListItem>
            <Link to="/archive">Archive</Link>
          </ListItem>
        </List>
      </Section>
      <Section heading="Contact">
        <List>
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
    </div>
  );
}

export const homeLoader = () => null;
