import ReactDOM from "react-dom/client";
import ProjectList from "./fragments/ProjectList";

const createRootById = (id) => {
  const element = document.getElementById(id);
  const root = ReactDOM.createRoot(element);
  return root;
};

createRootById("active-projects-container").render(
  <ProjectList filter={({ active }) => Boolean(active)} />
);

createRootById("inactive-projects-container").render(
  <ProjectList filter={({ active }) => !active} />
);
