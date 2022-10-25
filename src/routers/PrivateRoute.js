import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({path}) {
  const isAuth = useSelector((store) => store.uid);

  return (
    isAuth ? <Outlet /> : <Navigate to={path} />
  )

}

export default PrivateRoute;