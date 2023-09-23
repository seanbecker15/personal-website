import { Link } from "react-router-dom";
import SitemapItem from "@ui/molecules/SitemapItem";
import Anchor from "@ui/atoms/Anchor";
import { isDevelopment } from "@utils";

export default function Sitemap() {
  return (
    <div>
      <SitemapItem level={0}>
        <Anchor to="/">seanbecker.me</Anchor>
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
