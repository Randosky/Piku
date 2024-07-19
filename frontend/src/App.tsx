import { createRoot } from "react-dom/client";

import Creator from "./views/Creator";

const domNode = document.getElementById("pikuApp");

if (!domNode) new Error("Элемент не нашелся #pikuApp");
else {
  const root = createRoot(domNode);

  root.render(<Creator />);
}
