import "./styles.scss";

type Props = {
  heading: string,
  imgUrl: string,
};

export default function Header(props: Props) {
  const { heading, imgUrl } = props;

  return (
    <div className="Header">
      <h1>{heading}</h1>
      {imgUrl && <img className="Header__img" src={imgUrl} />}
    </div>
  );
}
