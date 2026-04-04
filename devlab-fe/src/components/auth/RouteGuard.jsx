import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export const PublicRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  // If the users are already authenticated, redirect them to the dashboard
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
};
