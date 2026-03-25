import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import KitList from "./pages/KitList.jsx";
import KitDetail from "./pages/KitDetail.jsx";
import Ide from "./pages/Ide.jsx";
import KoreanStyle from "./pages/KoreanStyle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/explore",
    element: <KitList />,
  },
  {
    path: "/kit/:id",
    element: <KitDetail />,
  },
  {
    path: "/ide",
    element: <Ide />,
  },
  {
    path: "/korean",
    element: <KoreanStyle />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
