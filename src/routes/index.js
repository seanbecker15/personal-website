import Root, { rootLoader } from "./root";
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
        lazy: () => import('./home'),
      },
      {
        path: routesJSON.root.children.education.path,
        lazy: () => import('./education'),
      },
      {
        path: routesJSON.root.children.experience.path,
        lazy: () => import('./experience'),
      },
      {
        path: routesJSON.root.children["about-me"].path,
        lazy: () => import('./about-me'),
      },
      {
        path: routesJSON.root.children.archive.path,
        lazy: () => import('./archive'),
      },
    ],
  },
];

export default routes;
