export default function SitemapItem(props) {
  return (
    <div className="SitemapItem" title={props.title}>
      {"--".repeat(props.level)} {props.children}
    </div>
  );
}
