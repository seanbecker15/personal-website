import Root, { rootLoader } from "./root";
import Education, { educationLoader } from "./education";
import Experience, { experienceLoader } from "./experience";
import AboutMe, { aboutMeLoader } from "./about-me";
import Archive, { archiveLoader } from "./archive";
import Home, { homeLoader } from "./home";
import Error from "./error";

/**
 * @type RouteObject[]
 */
const routes = [
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    loader: rootLoader,
    children: [
      // new routes
      {
        path: '',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "education",
        element: <Education />,
        loader: educationLoader,
      },
      {
        path: "experience",
        element: <Experience />,
        loader: experienceLoader,
      },
      {
        path: "about-me",
        element: <AboutMe />,
        loader: aboutMeLoader,
      },
      {
        path: 'archive',
        element: <Archive />,
        loader: archiveLoader,
      },
    ],
  },
];

export default routes;
