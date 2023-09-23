type Props = {
  children: Node,
};

export default function List(props: Props) {
  return <ul>{props.children}</ul>;
}
