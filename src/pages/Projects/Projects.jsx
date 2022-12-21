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
            I like building stuff, mkay
          </div>
        </div>
      </div>

      <div className="Projects__card-container">
        <ProjectCard
          title="Confidence Pool Selenium Scraper"
          entity="Just for fun :)"
          start="December 2022"
          end="Ongoing"
          description={
            <>
              <a href="/assets/docs/3gs/2022/week15.csv">Week 15 CSV</a>
            </>
          }
        />
        <ProjectCard
          title="Sportsbook / Streaming Account Integration"
          entity="Fubo Gaming (fuboTV)"
          start="July 2021"
          end="August 2021"
          badges={
            <BadgeContainer>
              <FuboBadge />
              <ReactBadge />
              <JavaScriptBadge />
              <NpmBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          title="Shared Housing Registration Portal"
          entity="Chicago Business Affairs and Consumer Protection (via Clarity Partners)"
          start="October 2020"
          end="May 2021"
          badges={
            <BadgeContainer>
              <ClarityBadge />
              <ConsumerProtectionBadge />
              <ReactBadge />
              <ReduxBadge />
              <TypeScriptBadge />
              <SpringBootBadge />
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
          start="February 2020"
          end="December 2020"
          title="Election IT Ticketing Dashboard"
          entity="Cook County Clerk (via Clarity Partners)"
          badges={
            <BadgeContainer>
              <ClarityBadge />
              <CookCountyClerkBadge />
              <ReactBadge />
              <ReduxBadge />
              <TypeScriptBadge />
              <DotNetCoreBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          start="One night during the COVID-19 pandemic"
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
          start="October 2017"
          title="Sumo Spinner"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <SocketIOBadge />
              <JavaScriptBadge />
              <PurdueBadge />
              <GithubBadge url="https://github.com/seanbecker15/sumo-spinner" />
            </BadgeContainer>
          }
        />
        <ProjectCard
          start="December 2017"
          end="November 2018"
          title="LatePlateMe!"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <PurdueBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          start="January 2019"
          end="May 2019"
          title="MarcoPolo Backtesting Platform"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <PurdueBadge />
              <GithubBadge url="https://github.com/seanbecker15/marcopolo-backend" />
            </BadgeContainer>
          }
        />
        <ProjectCard
          start="February 2018"
          end="August 2018"
          title="We Eat"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <PurdueBadge />
              <GithubBadge url="https://github.com/seanbecker15/we-eat" />
            </BadgeContainer>
          }
        />
        <ProjectCard
          start="April 2018"
          title="Media Explorer Tool"
          entity="Purdue University"
          badges={
            <BadgeContainer>
              <PurdueBadge />
              <GithubBadge url="https://github.com/seanbecker15/media-aggregation-ui" />
            </BadgeContainer>
          }
        />
        <ProjectCard
          start="August 2016"
          title="MetaCard"
          entity="No Organization"
          badges={
            <BadgeContainer>
              <JavaScriptBadge />
            </BadgeContainer>
          }
        />
        <ProjectCard
          start="July 2016"
          title="Help Desk Survey Tool"
          entity="American Hotel Register Company"
          badges={
            <BadgeContainer>
              <AmericanHotelBadge />
              <GithubBadge url="https://github.com/seanbecker15/outlook-bulk-send" />
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

function DotNetCoreBadge() {
  return (
    <Badge
      title="Dotnet Core"
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
    />
  );
}

function SpringBootBadge() {
  return (
    <Badge imgSrc="/assets/img/spring-boot-logo.svg" title="Spring Boot" />
  );
}

function CookCountyClerkBadge() {
  return (
    <Badge title="Cook County Clerk" imgSrc="/assets/img/chicago-logo.png" />
  );
}

function ConsumerProtectionBadge() {
  return (
    <Badge
      title="Bureau of Affairs and Consumer Protection, Chicago"
      imgSrc="/assets/img/chicago-logo.png"
    />
  );
}

function ChicagoPoliceBadge() {
  return (
    <Badge
      title="Chicago Police Department"
      imgSrc="/assets/img/chicago-logo.png"
    />
  );
}

function AmericanHotelBadge() {
  return (
    <Badge
      title="American Hotel Register"
      imgSrc="/assets/img/american-hotel-logo.svg"
    />
  );
}

function ClarityBadge() {
  return (
    <Badge
      imgSrc="/assets/img/clarity-logo.jpeg"
      url="https://www.claritypartners.com/"
      title="Clarity Partners, LLC (Chicago)"
    />
  );
}

function PurdueBadge() {
  return (
    <Badge title="Purdue University" imgSrc="/assets/img/purdue-logo.png" />
  );
}

function FuboBadge() {
  return (
    <Badge title="Fubo Gaming" imgSrc="/assets/img/fubo-gaming-logo.png" />
  );
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

function NpmBadge() {
  return <Badge title="npm" imgSrc="/assets/img/npm-logo.svg" />;
}
