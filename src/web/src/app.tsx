import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Publication } from "./pages/publication";
import { Profile } from "./pages/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/publication/:id",
    element: <Publication />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
