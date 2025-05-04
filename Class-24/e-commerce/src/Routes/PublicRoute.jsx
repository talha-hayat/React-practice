import { Navigate, Outlet } from "react-router-dom"
import MyNav from "../Components/MyNav"

export default function PublicRoute(){
    var isAuthenticated =!!localStorage.getItem("token")
    return isAuthenticated ? <><MyNav /><Outlet /></> : <Navigate to="/signin" />
}