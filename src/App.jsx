import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { isDevelopment } from "./util/env";
const Home = lazy(() => import("@pages/Home"));
const Learning = lazy(() => import("@pages/Learning"));
const Tasks = lazy(() => import("@pages/Tasks"));
const Blogs = lazy(() => import("@pages/Blogs"));
const Projects = lazy(() => import("@pages/Projects"));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Suspense>
                <Projects />
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
          <Route
            path="projects"
            element={
              <Suspense>
                <Projects />
              </Suspense>
            }
          />
        </Route>
        {isDevelopment() && (
          <Route path="/dev">
            <Route
              index
              element={
                <Suspense>
                  <Tasks />
                </Suspense>
              }
            />
            <Route
              path="home"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="blogs"
              element={
                <Suspense>
                  <Blogs />
                </Suspense>
              }
            />
          </Route>
        )}
      </Routes>
    </Router>
  );
}
