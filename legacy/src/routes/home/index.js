import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Header, Section } from "@ui/molecules";
import { Anchor, List, ListItem } from "@ui/atoms";

import "./styles.scss";

export function Component() {
  return (
    <div className="Home">
      <Helmet>
        <title>Sean Becker - Technology</title>
        <meta
          name="description"
          content="Senior Software Engineer at FuboTV ($FUBO) based out of Chicago. Sean delivers full-stack solutions for web technology."
        />
      </Helmet>

      <Header />

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
            <Anchor to="https://github.com/seanbecker15">Github</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="https://linkedin.com/in/seanmbecker">LinkedIn</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="https://twitter.com/TheSeanBecker">Twitter</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="https://www.instagram.com/sean.bex/">Instagram</Anchor>
          </ListItem>
        </List>
      </Section>
    </div>
  );
}

export const loader = () => null;
