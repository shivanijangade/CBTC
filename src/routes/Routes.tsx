import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DashboardLayout from "@/layout/DashboardLayout";
import RecentEvents from "@/pages/RecentEvents";
import EventItems from "@/pages/EventItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "recent-events",
            element: <RecentEvents />,
          },
          {
            path: "event-items",
            element: <EventItems />,
          },
        ],
      },
    ],
  },
]);

export default router;
