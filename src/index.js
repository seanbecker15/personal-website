const createRootById = (id) => {
  const element = document.getElementById(id);
  const root = ReactDOM.createRoot(element);
  return root;
};

const projects = [
  {
    url: "./projects/learning.html",
    title: "Current topics that I am learning about...",
    active: true,
    external: false,
  },
  {
    url: "https://webapps1.chicago.gov/chicagohouseshare/",
    title: "House Share Registration Portal - BACP Chicago",
    active: false,
    external: true,
  },
  {
    url: "./projects/caseincident.html",
    title: "CASE Records Management System - Chicago Police Department",
    active: false,
    external: false,
  },
  {
    url: "./projects/automatedcallform.html",
    title: "ACF Election Software - Cook County",
    active: false,
    external: false,
  },
  {
    url: "./projects/buzz.html",
    title: "Drink Please (formerly bzzer.io)",
    active: false,
    external: false,
  },
  {
    url: "https://sumospinnerv2.herokuapp.com/",
    title: "Sumo Spinner",
    active: false,
    external: true,
  },
  {
    url: "./projects/lateplateme.html",
    title: "Lateplateme - Tool for requesting food on the go",
    active: false,
    external: false,
  },
  {
    url: "https://github.com/seanbecker15/we-eat",
    title: "We Eat - Yelp alternative built during Purdue CS 307",
    active: false,
    external: true,
  },
  {
    url: "https://github.com/seanbecker15/cspan-scraper",
    title: "Purdue University CSPAN Research",
    active: false,
    external: true,
  },
];

const Anchor = ({ to, isExternal, children }) => (
  <a
    href={to}
    target={isExternal ? "__blank" : undefined}
    referrerpolicy={isExternal ? "no-referrer" : undefined}
  >
    {children}
  </a>
);

const Text = ({ children }) => <div>{children}</div>;

const ProjectList = ({ filter }) => (
  <ul>
    {projects.filter(filter).map(({ title, url, external }) => (
      <li key={title}>
        {url ? (
          <Anchor to={url} isExternal={external}>
            {title}
          </Anchor>
        ) : (
          <Text>{title}</Text>
        )}
      </li>
    ))}
  </ul>
);

createRootById("active-projects-container").render(
  <ProjectList filter={({ active }) => Boolean(active)} />
);

createRootById("inactive-projects-container").render(
  <ProjectList filter={({ active }) => !active} />
);
