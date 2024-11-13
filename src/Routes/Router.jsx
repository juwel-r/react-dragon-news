import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "./Home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);
