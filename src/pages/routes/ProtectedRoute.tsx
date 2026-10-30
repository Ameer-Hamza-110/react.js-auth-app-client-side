
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

interface ProtectedRouteProps {
  allowedRoles?: ("admin" | "user")[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const user = useAuthStore((state) => state.user);

  const location = useLocation();

  if (!accessToken || !user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
