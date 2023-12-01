import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext, AppContextType } from "../context/AppContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useContext(AppContext) as AppContextType;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
