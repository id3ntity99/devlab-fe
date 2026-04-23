import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import KitList from "./pages/KitList.jsx";
import KitDetail from "./pages/KitDetail.jsx";
import Ide from "./pages/Ide.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { ProtectedRoute, PublicRoute } from "./components/auth/RouteGuard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/kits/:kitId",
    element: <KitDetail />,
  },
  {
    path: "/kits",
    element: <KitList />,
  }, // Accessible to everyone regardless of authentication status
  { path: "/ide", element: <Ide /> }, //FIXME Move this to ProtectedRoute
  {
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/kits", element: <KitList /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/kits/:kitId", element: <KitDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
