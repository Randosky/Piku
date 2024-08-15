import NotFound from "@components/NotFound";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Creator from "./views/Creator";

const domNode = document.getElementById("pikuApp");

if (!domNode) new Error("Элемент не нашелся #pikuApp");
else {
  const root = createRoot(domNode);

  root.render(
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Creator />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}
