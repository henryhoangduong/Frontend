import React from 'react'
import { useAuth } from '../context/AuthContext';
import { Navigate,Outlet } from 'react-router-dom';


function UserRoute() {
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
    return authUser?.role==='user' ? <Outlet></Outlet> : <Navigate to="/" />;
}

export default UserRoute
