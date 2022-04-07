const createRootById = (id) => {
  const element = document.getElementById(id);
  const root = ReactDOM.createRoot(element);
  return root;
};

const inactiveProjectsReactRoot = createRootById("inactive-projects-container");

const projects = [
  {
    url: "https://webapps1.chicago.gov/chicagohouseshare/",
    name: "House Share Registration Portal - BACP Chicago"
  },
  {
    url: "./projects/caseincident.html",
    name: "CASE Records Management System - Chicago Police Department"
  },
  {
    url: "./projects/automatedcallform.html",
    name: "ACF Election Software - Cook County"
  },
  {
    url: "./projects/buzz.html",
    name: "Drink Please (formerly bzzer.io)"
  },
  {
    url: "https://sumospinnerv2.herokuapp.com/",
    name: "Sumo Spinner"
  },
  {
    url: "./projects/lateplateme.html",
    name: "Lateplateme - Tool for requesting food on the go"
  },
  {
    url: "https://github.com/seanbecker15/we-eat",
    name: "We Eat - Yelp alternative built during Purdue CS 307"
  },
  {
    url: "https://github.com/seanbecker15/cspan-scraper",
    name: "Purdue University CSPAN Research"
  },
];

const ProjectList = () => <ul>
  {
    projects.map(p => <li key={p.name}>
      <a href={p.url}>{p.name}</a>
    </li>)
  }
</ul>


inactiveProjectsReactRoot.render(
  <ProjectList />
);
