import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { status } = useSelector((state) => state.auth);

  const authenticated = useMemo(() => status === "authenticated", [status]);

  return authenticated ? children : <Navigate to="/login" />;
};
