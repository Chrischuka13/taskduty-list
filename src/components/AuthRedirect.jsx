import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthRedirect = ({ children }) => {
  // const token = localStorage.getItem("token");
  const {user} = useContext(AuthContext)

  if (user?.token) {
    return <Navigate to="/profile"/>;
  }

  return children;
};

export default AuthRedirect;
