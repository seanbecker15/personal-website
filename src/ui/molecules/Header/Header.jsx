import "./styles.scss";

type Props = {
  imgUrl: string,
};

export default function Header(props: Props) {
  const { imgUrl } = props;

  return (
    <div className="Header">
      {imgUrl && <img className="Header__img" src={imgUrl} />}
    </div>
  );
}
