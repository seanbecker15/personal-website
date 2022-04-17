import ReactDOM from "react-dom/client";
import App from "./App";

const createRootById = (id) => {
  const element = document.getElementById(id);
  const root = ReactDOM.createRoot(element);
  return root;
};

createRootById("root").render(<App />);
