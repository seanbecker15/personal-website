// @flow

import type { Node } from "react";

import ProjectCard from "../../components/ProjectCard";
import Badge from "@ui/Badge";
import "./styles.scss";

export default function Projects(): Node {
  return (
    <div className="Projects">
      <div className="Projects__header">
        <div>
          <img
            src="/assets/img/profile.jpg"
            alt="Sean in black and white, smiling!"
            className="Projects__photo-of-me"
          />
        </div>
        <div>
          <div className="Projects__header-text">
            Software built by Sean Becker.
          </div>
          <div className="Projects__subheader-text">
            "I’m an engineer. To save time let’s just assume that I’m never
            wrong."
          </div>
        </div>
      </div>

      <div className="Projects__card-container">
        <ProjectCard
          title="Shared Housing Registration Portal"
          entity="Chicago Business Affairs and Consumer Protection (via Clarity Partners)"
          badges={
            <BadgeContainer>
              <ClarityBadge />
              <ConsumerProtectionBadge />
              <SpringBootBadge />
              <ReactBadge />
              <TypeScriptBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          start="July 2019"
          end="May 2021"
          title="Records Management System"
          entity="Chicago Police Department (via Clarity Partners)"
          badges={
            <BadgeContainer>
              <ClarityBadge />
              <ChicagoPoliceBadge />
              <ReactBadge />
              <ReduxBadge />
              <TypeScriptBadge />
              <DotNetCoreBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="Election IT Ticketing Dashboard"
          entity="Cook County Clerk (via Clarity Partners)"
          badges={
            <BadgeContainer>
              <ClarityBadge />
              <CookCountyClerkBadge />
              <ReactBadge />
              <TypeScriptBadge />
              <DotNetCoreBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="Drink!"
          entity="No Organization"
          badges={
            <BadgeContainer>
              <SocketIOBadge />
              <JavaScriptBadge />
              <GithubBadge url="https://github.com/seanbecker15/drink-please" />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="Sumo Spinner"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <SocketIOBadge />
              <JavaScriptBadge />
              <PurdueBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="LatePlateMe!"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <PurdueBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="MarcoPolo Backtesting Platform"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <PurdueBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="We Eat"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <PurdueBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="Media Explorer Tool"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <PurdueBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="MetaCard"
          entity="No Organization"
          badges={
            <BadgeContainer>
              <JavaScriptBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="Help Desk Survey Tool"
          entity="American Hotel Register Company"
          badges={
            <BadgeContainer>
              <AmericanHotelBadge />
            </BadgeContainer>
          }
        />
      </div>
    </div>
  );
}

function BadgeContainer(props: { children: Node }): Node {
  return <div className="Projects__badge-container">{props.children}</div>;
}

function ClarityBadge() {
  return (
    <Badge
      imgSrc="https://www.claritypartners.com/wp-content/themes/clarity/img/clarity-partners-llc-logo.jpg"
      url="https://www.claritypartners.com/"
      title="Clarity Partners, LLC (Chicago)"
    />
  );
}

function SpringBootBadge() {
  return (
    <Badge
      imgSrc="https://image.pngaaa.com/500/2459500-middle.png"
      title="Spring Boot"
    />
  );
}

function ReactBadge() {
  return (
    <Badge
      title="ReactJS"
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    />
  );
}

function ReduxBadge() {
  return (
    <Badge
      title="Redux"
      imgSrc="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg"
    />
  );
}

function TypeScriptBadge() {
  return (
    <Badge
      title="TypeScript"
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    />
  );
}

function JavaScriptBadge() {
  return (
    <Badge
      title="JavaScript"
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/b/b6/Badge_js-strict.svg"
    />
  );
}

function SocketIOBadge() {
  return <Badge title="Socket.io" />;
}

function CookCountyClerkBadge() {
  return <Badge title="Cook County Clerk" />;
}

function ConsumerProtectionBadge() {
  return <Badge title="Bureau of Affairs and Consumer Protection, Chicago" />;
}

function ChicagoPoliceBadge() {
  return <Badge title="Chicago Police Department" />;
}

function AmericanHotelBadge() {
  return <Badge title="American Hotel Register" />;
}

function DotNetCoreBadge() {
  return (
    <Badge
      title="Dotnet Core"
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
    />
  );
}

function PurdueBadge() {
  return (
    <Badge
      title="Purdue University"
      imgSrc="https://pbs.twimg.com/profile_images/1384614212274692098/MVrG6l7P_400x400.png"
    />
  );
}

function FuboBadge() {
  return <Badge title="Fubo Gaming" />;
}

function GithubBadge({ url }: { url: string }) {
  return (
    <Badge
      title="GitHub"
      url={url}
      imgSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    />
  );
}
