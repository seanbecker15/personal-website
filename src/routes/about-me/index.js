import { List, ListItem } from "@ui/atoms";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h2>About Me</h2>
      {"Here's a little bit of information about me:"}
      <List>
        <ListItem>I grew up in Vernon Hills, IL</ListItem>
        <ListItem>
          I went to Purdue University where I majored in Computer Science and
          minored in Business Management
        </ListItem>
        <ListItem>
          I try to take at least one ski trip every year, usually on the west
          coast of the US
        </ListItem>
        <ListItem>
          I frequently listen podcasts including Lex Fridman, Andrew Huberman,
          Joe Rogan, and Sam Harris
        </ListItem>
        <ListItem>
          I enjoy building all things related to technology! Please reach out if you have an idea and want advice on how to build it {':)'}
        </ListItem>
      </List>
    </div>
  );
}

export const aboutMeLoader = () => null;
