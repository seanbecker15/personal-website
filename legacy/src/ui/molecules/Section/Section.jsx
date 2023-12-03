import "./styles.scss";

type Props = {
  heading: string,
  children: Node,
};

export default function Section(props: Props) {
  const { heading, children } = props;

  return (
    <div className="Section">
      <h2>{heading}</h2>
      <div className="Section__content">
        {children}
      </div>
    </div>
  );
}
