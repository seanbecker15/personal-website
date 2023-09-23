import { Link } from "react-router-dom";

import "./styles.scss";

type Props = {
  imgSrc?: string,
  url?: string,
  isInternalUrl?: boolean,
  text?: string,
  title?: string,
};

/**
 * 
 * @param {Props} props 
 * @returns 
 */
export default function Badge(props: Props) {
  const renderContent = (imgSrc, text) => {
    let content = <div className="Badge__text">{text}</div>;
    if (imgSrc) {
      content = <img className="Badge__image" src={imgSrc} />;
    }
    return <div className="Badge__content">{content}</div>;
  };

  const ClickWrapper = ({ children }: { children: Node }) => {
    if (!props.url) {
      return <>{children}</>;
    }

    if (props.isInternalUrl) {
      return (
        <Link to={props.url} className="Badge__click-wrapper">
          {children}
        </Link>
      );
    } else {
      return (
        <a
          href={props.url}
          className="Badge__click-wrapper"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }
  };

  return (
    <div className="Badge" title={props.title}>
      <ClickWrapper>{renderContent(props.imgSrc, props.text)}</ClickWrapper>
    </div>
  );
}
