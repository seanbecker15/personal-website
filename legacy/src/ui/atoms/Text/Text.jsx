type Props = {
  children: Node,
};

export default function Text(props: Props) {
  return <div>{props.children}</div>;
}
