import { Anchor, List, ListItem } from "@ui/atoms";

export default function Experience() {
  return (
    <div className="Experience">
      <h2>Current employment</h2>
      <h3>FuboTV</h3>

      <List>
        <ListItem>
          Process & standards improvements, modernization of code practices
        </ListItem>
        <ListItem>Performed overhaul of remote-control focus system.</ListItem>
        <ListItem>
          Contributed to several features during application rewrite, including
          the navigation sidebar and playback controls
        </ListItem>
        <ListItem>
          Sped up development efficiency in key areas including VOD Playback,
          Client Side Ad Insertion (CSAI), Xbox, and LG (WebOS)
        </ListItem>
      </List>
      <h3>{"Fubo Gaming (former subsidiary of FuboTV)"}</h3>
      <List>
        <ListItem>
          Assisted in shaping processes to scale team from 5 engineers to 15
          engineers
        </ListItem>
        <ListItem>
          Created development pipeline and wrote template for making and
          publishing Node.js packages
        </ListItem>
        <ListItem>
          Performed auth rewrite & integration between sportsbook and TV
          product; Coordinated effort between white-label provider, in-house
          designers, in-house frontend team, and in-house platform team
        </ListItem>
        <ListItem>
          Helped pass regulatory review in order to launch sportsbook in three
          states (Iowa, Arizona, and New Jersey)
        </ListItem>
        <ListItem>
          Led Trustly payment integration and licensing from technical
          perspective
        </ListItem>
      </List>

      <h2>Prior employment</h2>
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
