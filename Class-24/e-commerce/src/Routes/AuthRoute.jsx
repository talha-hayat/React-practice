import { Navigate, Outlet } from "react-router-dom"

export default function AuthRoute(){
    var isAuthenticated = !!localStorage.getItem("token")
    return isAuthenticated ? <Navigate to='/' /> : <Outlet />
}