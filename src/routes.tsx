import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import Layout from "./pages/layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:id", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
