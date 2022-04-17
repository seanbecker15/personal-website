import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Learning = lazy(() => import("./pages/Learning"));
const Dev = lazy(() => import("./pages/Dev"));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/learning"
            element={
              <Suspense>
                <Learning />
              </Suspense>
            }
          />
        </Route>
        {__DEV__ && (
          <Route
            path="/dev"
            element={
              <Suspense>
                <Dev />
              </Suspense>
            }
          />
        )}
      </Routes>
    </Router>
  );
}
