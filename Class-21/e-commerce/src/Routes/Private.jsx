import { Navigate } from "react-router-dom"


export default function PrivateRoute({children}){
   const isauthenticad = !!localStorage.getItem("token")
   console.log(isauthenticad)



   return isauthenticad ? children : <Navigate to="/signin" />
}