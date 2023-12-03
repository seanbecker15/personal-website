export default function Anchor(props) {
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
