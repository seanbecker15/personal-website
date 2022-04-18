// @flow

import type { Node } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

type Props = {
  title: string,
  entity: string,
  start?: string,
  end?: string,
  internalUrl?: string,
  description: string,
  longDescription: string,
  badges?: Node,
};

export default function ProjectCard(props: Props): Node {
  const renderTitle = () => {
    if (props.internalUrl) {
      return <Link to={props.internalUrl}>{props.title}</Link>;
    }

    return props.title;
  };
  return (
    <div className="ProjectCard">
      <div className="ProjectCard__header">
        <div className="ProjectCard__title-container">
          <div className="ProjectCard__title">{renderTitle()}</div>
          <div className="ProjectCard__entity">{props.entity}</div>
        </div>
        <div className="ProjectCard__date-container">
          {props.start}
          {props.end && " - "}
          {props.end}
        </div>
      </div>
      <div className="ProjectCard__description">{props.description}</div>
      <div className="ProjectCard__badges">{props.badges}</div>
    </div>
  );
}
