type Props = {
  to: string,
  isExternal: boolean,
  children: Node,
};

/**
 * 
 * @param {Props} props 
 * @returns 
 */
export default function Anchor(props: Props) {
  return (
    <a
      href={props.to}
      rel={props.isExternal ? 'noreferrer' : undefined}
      target={props.isExternal ? "_blank" : undefined}
      referrerPolicy={props.isExternal ? "no-referrer" : undefined}
    >
      {props.children}
    </a>
  );
}
