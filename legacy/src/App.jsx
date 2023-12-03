import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Learning, Tasks, Projects, Sitemap } from "./pages";
import { PageLayout, Footer } from "@ui/molecules";
import { isDevelopment } from "@utils";

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
            </Route>
          )}
        </Routes>
      </PageLayout>
    </Router>
  );
}
