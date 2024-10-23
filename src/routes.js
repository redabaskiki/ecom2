// routes.js (or routes.tsx if you're using TypeScript)
import { createBrowserRouter  } from "react-router-dom";
import AppLayout from "./pages.jsx/AppLayout";
 import Home from "./pages.jsx/Home";
  import Product from "./pages.jsx/Product";
  import Profile from "./pages.jsx/Profile";
 import { Register } from "./pages.jsx/Register";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/Product", element: <Product /> },
      { path: "/Profile", element: <Profile /> },
    ],
  },
  { path: "/", element: <Home /> },
  { path: "/Register", element: <Register /> },
]);

export default router;
