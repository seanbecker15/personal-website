import { Outlet } from "react-router-dom";
import { Footer } from "@ui/molecules";

import "./styles.scss";

export default function Root() {
  return (
    <div className="Root">
      <h1>Sean Becker</h1>

      <Outlet />

      <br />
      <Footer />
    </div>
  );
}

export const rootLoader = () => null;
