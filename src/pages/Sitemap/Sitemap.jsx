import { Link } from "react-router-dom";
import SitemapItem from "../../components/SitemapItem";
import Anchor from "../../ui/Anchor";
import { isDevelopment } from "../../util/env";

export default function Sitemap() {
  return (
    <div>
      <SitemapItem level={0}>
        <Anchor to="https://seanbecker.me">seanbecker.me</Anchor>
      </SitemapItem>
      <SitemapItem level={1}>
        <Link to="/learning">learning topics</Link>
      </SitemapItem>
      <SitemapItem level={1}>
        <Link to="/projects">projects</Link>
      </SitemapItem>
      <SitemapItem level={1}>
        <Link to="/sitemap">sitemap</Link>
      </SitemapItem>
      {isDevelopment() && (
        <>
          <SitemapItem level={1}>dev links</SitemapItem>
          <SitemapItem level={2}>
            <Link to="/dev/tasks">tasks</Link>
          </SitemapItem>
          <SitemapItem level={2}>
            <Link to="/dev/home">home page</Link>
          </SitemapItem>
        </>
      )}
    </div>
  );
}
