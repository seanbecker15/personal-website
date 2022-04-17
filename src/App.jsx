import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Learning = lazy(() => import("./pages/Learning"));

export default function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}
