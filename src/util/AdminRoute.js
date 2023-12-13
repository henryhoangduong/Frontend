import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";
function AdminRoute() {
  const nav=useNavigate()
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  return authUser?.role === 'admin' ? <Outlet></Outlet>:<></>;
}

export default AdminRoute;
