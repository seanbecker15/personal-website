type Props = {
  children: Node,
};

export default function ListItem(props: Props) {
  return <li>{props.children}</li>;
}
