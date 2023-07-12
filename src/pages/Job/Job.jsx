import List from "@ui/List";
import ListItem from "@ui/ListItem";

export default function Job() {
  return (
    <div className="Job">
      <h2>Fubo Gaming</h2>
      <List>
        <ListItem>Assisted in shaping processes to scale team from 5 engineers to 15 engineers</ListItem>
        <ListItem>Created development pipeline and wrote template for making and publishing Node.js packages</ListItem>
        <ListItem>Performed auth rewrite & integration between sportsbook and TV product; Coordinated effort between white-label provider, in-house designers, in-house frontend team, and in-house platform team</ListItem>
        <ListItem>Helped pass regulatory review in order to launch sportsbook in three states (Iowa, Arizona, and New Jersey)</ListItem>
        <ListItem>Led Trustly payment integration and licensing from technical perspective</ListItem>
      </List>
      <h2>FuboTV</h2>
      <List>
        <ListItem>Process & standards improvements, modernization of code practices</ListItem>
        <ListItem>Performed overhaul of remote-control focus system.</ListItem>
        <ListItem>Contributed to several features during application rewrite, including the navigation sidebar and playback controls</ListItem>
        <ListItem>Sped up development efficiency in key areas including VOD Playback, Client Side Ad Insertion (CSAI), Xbox, and LG (WebOS)</ListItem>
      </List>
    </div>
  );
}
