import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { isDevelopment } from "./util/env";
import PageLayout from "./components/PageLayout";
import Footer from "./components/Footer";
import Job from "./pages/Job";
const Home = lazy(() => import("@pages/Home"));
const Learning = lazy(() => import("@pages/Learning"));
const Tasks = lazy(() => import("@pages/Tasks"));
const Projects = lazy(() => import("@pages/Projects"));
const Sitemap = lazy(() => import("@pages/Sitemap"));

export default function App() {
  return (
    <Router>
      <PageLayout
        footerContent={
          <Footer>
            <Link to="sitemap">Sitemap</Link>
          </Footer>
        }
      >
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
              path="job"
              element={
                <Suspense>
                  <Job />
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
            <Route
              path="/sitemap"
              element={
                <Suspense>
                  <Sitemap />
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
          {isDevelopment() && (
            <Route path="/dev">
              <Route
                index
                element={
                  <Suspense>
                    <Sitemap />
                  </Suspense>
                }
              />
              <Route
                path="tasks"
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
            </Route>
          )}
        </Routes>
      </PageLayout>
    </Router>
  );
}
