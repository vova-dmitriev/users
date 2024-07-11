import ReactDOM from "react-dom/client";
import Router from "@/routes";
import { BrowserRouter } from "react-router-dom";

import "@/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
