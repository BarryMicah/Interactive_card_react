import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const isAuth = {'token': true}
    return isAuth.token ? <Outlet/> : <Navigate to="/confirm"/>
}

export default ProtectedRoutes;