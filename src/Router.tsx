import { Convert } from "components/convert";
import Home from "components/home";
import { createBrowserRouter, RouteObject } from "react-router-dom";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Convert />,
    errorElement: <Convert />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  //   errorElement: <Login />,
  // },
];

const router = createBrowserRouter(routes);
export default router;
