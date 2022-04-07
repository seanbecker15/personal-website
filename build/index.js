var createRootById = function createRootById(id) {
  var element = document.getElementById(id);
  var root = ReactDOM.createRoot(element);
  return root;
};

var inactiveProjectsReactRoot = createRootById("inactive-projects-container");

var projects = [{
  url: "https://webapps1.chicago.gov/chicagohouseshare/",
  name: "House Share Registration Portal - BACP Chicago"
}, {
  url: "./projects/caseincident.html",
  name: "CASE Records Management System - Chicago Police Department"
}, {
  url: "./projects/automatedcallform.html",
  name: "ACF Election Software - Cook County"
}, {
  url: "./projects/buzz.html",
  name: "Drink Please (formerly bzzer.io)"
}, {
  url: "https://sumospinnerv2.herokuapp.com/",
  name: "Sumo Spinner"
}, {
  url: "./projects/lateplateme.html",
  name: "Lateplateme - Tool for requesting food on the go"
}, {
  url: "https://github.com/seanbecker15/we-eat",
  name: "We Eat - Yelp alternative built during Purdue CS 307"
}, {
  url: "https://github.com/seanbecker15/cspan-scraper",
  name: "Purdue University CSPAN Research"
}];

var ProjectList = function ProjectList() {
  return React.createElement(
    "ul",
    null,
    projects.map(function (p) {
      return React.createElement(
        "li",
        { key: p.name },
        React.createElement(
          "a",
          { href: p.url },
          p.name
        )
      );
    })
  );
};

inactiveProjectsReactRoot.render(React.createElement(ProjectList, null));