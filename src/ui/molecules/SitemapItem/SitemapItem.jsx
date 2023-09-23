import "./styles.scss";

type Props = {
  level: number,
  title: string,
  children: Node,
};

export default function SitemapItem(props: Props) {
  const { level } = props;

  return (
    <div className="SitemapItem" title={props.title}>
      {renderPrefix(level)}
      {props.children}
    </div>
  );
}

function renderPrefix(level: number) {
  if (level === 0) {
    return " ";
  }

  if (level === 1) {
    return "|-- ";
  }

  const arr = new Array((level - 2) * 4 + 3).fill(null);
  return (
    <>
      {"|"}
      {arr.map(() => (
        <>
          <Space />
        </>
      ))}
      {"|-- "}
    </>
  );
}

function Space() {
  return <>&nbsp;</>;
}
