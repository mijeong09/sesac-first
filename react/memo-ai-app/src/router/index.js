import { createBrowserRouter } from "react-router-dom";

import rootRoutes from "./routes/rootRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import NotFound from "../page/NotFound.jsx";

const router = createBrowserRouter([
  ...rootRoutes,
  ...authRoutes,
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
