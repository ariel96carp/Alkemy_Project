import { Navigate } from "react-router"

const ProtectedRoute = ({ children }) => {
    const auth = localStorage.getItem("alkemyToken")
    return auth
        ? children
        : <Navigate replace to="/" />
}

export default ProtectedRoute