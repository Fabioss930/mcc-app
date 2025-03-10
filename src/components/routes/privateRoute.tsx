import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = localStorage.getItem("user_mcc_token");

  return token ? <Outlet /> : <Navigate to="/" replace />;
}
