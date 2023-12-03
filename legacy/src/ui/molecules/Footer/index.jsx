import { getVersion, getVersionDate } from "@utils";
import "./styles.scss";

export default function Footer() {
  return <div className="Footer">
    <small>Site last updated {getVersionDate()}{' '}{`(Version ${getVersion()})`}</small>
  </div>;
}
