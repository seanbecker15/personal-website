var createRootById = function createRootById(id) {
  var element = document.getElementById(id);
  var root = ReactDOM.createRoot(element);
  return root;
};

var projects = [
  {
    url: "./assets/projects/learning.html",
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
    url: "./assets/projects/caseincident.html",
    title: "CASE Records Management System - Chicago Police Department",
    active: false,
    external: false,
  },
  {
    url: "./assets/projects/automatedcallform.html",
    title: "ACF Election Software - Cook County",
    active: false,
    external: false,
  },
  {
    url: "./assets/projects/buzz.html",
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
    url: "./assets/projects/lateplateme.html",
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

var Anchor = function Anchor(_ref) {
  var to = _ref.to,
    isExternal = _ref.isExternal,
    children = _ref.children;
  return React.createElement(
    "a",
    {
      href: to,
      target: isExternal ? "__blank" : undefined,
      referrer: isExternal ? "noreferrer" : undefined,
    },
    children
  );
};

var Text = function Text(_ref2) {
  var children = _ref2.children;
  return React.createElement("div", null, children);
};

var ProjectList = function ProjectList(_ref3) {
  var filter = _ref3.filter;
  return React.createElement(
    "ul",
    null,
    projects.filter(filter).map(function (_ref4) {
      var title = _ref4.title,
        url = _ref4.url,
        external = _ref4.external;
      return React.createElement(
        "li",
        { key: title },
        url
          ? React.createElement(
              Anchor,
              { to: url, isExternal: external },
              title
            )
          : React.createElement(Text, null, title)
      );
    })
  );
};

createRootById("active-projects-container").render(
  React.createElement(ProjectList, {
    filter: function filter(_ref5) {
      var active = _ref5.active;
      return Boolean(active);
    },
  })
);

createRootById("inactive-projects-container").render(
  React.createElement(ProjectList, {
    filter: function filter(_ref6) {
      var active = _ref6.active;
      return !active;
    },
  })
);
