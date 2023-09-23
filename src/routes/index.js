import Root, { rootLoader } from "./root";
import Education, { educationLoader } from "./education";
import Experience, { experienceLoader } from "./experience";
import AboutMe, { aboutMeLoader } from "./about-me";
import Archive, { archiveLoader } from "./archive";
import Home, { homeLoader } from "./home";
import Error from "./error";
import routesJSON from './routes.json'

/**
 * @type RouteObject[]
 */
const routes = [
  {
    path: routesJSON.root.path,
    errorElement: <Error />,
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: routesJSON.root.path,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: routesJSON.root.children.education.path,
        element: <Education />,
        loader: educationLoader,
      },
      {
        path: routesJSON.root.children.experience.path,
        element: <Experience />,
        loader: experienceLoader,
      },
      {
        path: routesJSON.root.children["about-me"].path,
        element: <AboutMe />,
        loader: aboutMeLoader,
      },
      {
        path: routesJSON.root.children.archive.path,
        element: <Archive />,
        loader: archiveLoader,
      },
    ],
  },
];

export default routes;
