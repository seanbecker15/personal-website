import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import routes from "./routes";

const createRootById = (id) => {
  const element = document.getElementById(id);
  const root = ReactDOM.createRoot(element);
  return root;
};

const router = createBrowserRouter(routes);
createRootById("root").render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
