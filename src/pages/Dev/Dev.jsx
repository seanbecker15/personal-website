import { Fragment, useEffect, useRef } from "react";
import * as Eisenhower from "../../components/EisenhowerMatrix";
import SitemapItem from "../../components/SitemapItem";
import "./styles.scss";

export default function Dev() {
  return (
    <div className="Dev">
      <h1>Page is under construction...</h1>
      <h2>Priorities:</h2>
      <ol>
        <li> Taxes</li>
        <li> Work out</li>
        <li> Groceries</li>
        <li> Project highlights</li>
        <li> Blogs</li>
        <li> Old projects</li>
      </ol>

      <h2>Sitemap</h2>
      <SitemapItem level={1} title="Project and blog highlights">
        /
      </SitemapItem>
      <SitemapItem level={1} title="Chronological list of blogs">
        /blogs
      </SitemapItem>
      <SitemapItem level={1} title="Chronological list of projects">
        /projects
      </SitemapItem>
      <br />
      <SitemapItem level={1}>/archive</SitemapItem>
      <SitemapItem level={2}>/blogs</SitemapItem>
      <SitemapItem level={2}>/projects</SitemapItem>
      <Eisenhower.Matrix size={300} xOffset={100} yOffset={100}>
        <Eisenhower.Dot urgency={0} importance={3} title="Old projects" />
        <Eisenhower.Dot urgency={3} importance={7} title="Project highlights" />
        <Eisenhower.Dot urgency={0} importance={5} title="Blogs" />
        <Eisenhower.Dot urgency={10} importance={1} title="Taxes" />
        <Eisenhower.Dot urgency={6} importance={6} title="Work out" />
        <Eisenhower.Dot urgency={5} importance={7} title="Groceries" />
      </Eisenhower.Matrix>
    </div>
  );
}
