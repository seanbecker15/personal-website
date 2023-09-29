import { Helmet } from "react-helmet-async";

import { Anchor, List, ListItem } from "@ui/atoms";

export default function Experience() {
  return (
    <div className="Experience">
      <Helmet>
        <title>Sean Becker - FuboTV</title>
      </Helmet>
      <h1>Sean Becker - FuboTV</h1>
      <h2>{"FuboTV - Senior Software Engineer, SmartTV (Present)"}</h2>

      <List>
        <ListItem>
          <Anchor to='https://cordcuttersnews.com/fubo-is-rolling-out-a-new-improved-user-interface-with-re-designed-apps/'>
            Redesigned SmartTV application
          </Anchor>
          {/*  and launched to 300,000+ users. */}
        </ListItem>
        <List>
          <ListItem>Built new sidebar found on LG, Samsung, Vizio, Hisense, and Xbox applications.</ListItem>
          <ListItem>Integrated new backend with existing player controls (i.e., the UI that allows users to control playback).</ListItem>
        </List>
        <ListItem>Built tooling to improve developer efficiency.</ListItem>
        {/* <ListItem>Coming soon</ListItem>
        <List>
          <ListItem>Problem: We do not have insights into the complexities caused by supporting such a wide range of devices</ListItem>
          <ListItem>Problem: Over time, it becomes difficult to maintain code for the different brands and device classifications we support.</ListItem>
          <ListItem>Problem: Development and testing is difficult due to specifics of physical devices.</ListItem>
          <ListItem>Solution: Organize files, tests, and code in a way that scales with the devices we support.</ListItem>
          <ListItem>Solution: Test on physical devices using webdriver.</ListItem>
          <ListItem>Solution: Improve ticketing and triage to capture brand and device classifications. Build reports using this information.</ListItem>
          <ListItem>Solution: Annotate device specific code branches to programatically calculate complexity.</ListItem>
        </List> */}
      </List>
      <h2>{"Fubo Gaming - Software Engineer"}</h2>
      <List>
        <ListItem>
          Interviewed 70+ candidates for engineering roles. Scaled team from 5 to 15 engineers.
        </ListItem>
        <ListItem>
          Created template for making new Node.js packages that get published to Github npm registry.
        </ListItem>
        <ListItem>
          Rewrote authentication flow & integration between sportsbook and TV
          product; Coordinated effort between white-label provider, in-house
          designers, in-house frontend team, and in-house platform team.
        </ListItem>
        <ListItem>
          Integrated <Anchor to='https://us.trustly.com' isExternal>Trustly</Anchor> payment provider, simplifying deposit flow and substantially increasing first time deposit rate.
        </ListItem>
        <ListItem>
          Coordinated regulatory changes required to launch Fubo Sportsbook in Iowa, Arizona, and New Jersey.
        </ListItem>
      </List>

      <h2>Prior Employment</h2>
      <List>
        <ListItem>
          For information on prior employment, you can{" "}
          <Anchor to="./assets/docs/resume.pdf">view my resume here</Anchor>.
        </ListItem>
      </List>
    </div>
  );
}

export const experienceLoader = () => null;
