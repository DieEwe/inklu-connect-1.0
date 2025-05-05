import { Navigate, useLocation } from "react-router-dom";

const isAuthenticated = () => {
  // Example: check localStorage for a login flag
  return localStorage.getItem("isLoggedIn") === "true";
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;