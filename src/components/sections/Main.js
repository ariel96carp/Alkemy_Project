import ProtectedRoute from "../ProtectedRoute"
import LoginForm from "../pages/loginForm"
import MainForm from "../pages/mainForm"
import HomeGrid from "../pages/homeGrid"
import Team from "../pages/team"
import HeroDetails from "../cards/HeroDetails"
import { 
    Routes, 
    Route, 
    Navigate
} from "react-router" 

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={(!localStorage.getItem("alkemyToken"))
                    ? <LoginForm />
                    : <Navigate replace to="/home"/>}>
                </Route>
                <Route path="/home" element={
                    <ProtectedRoute>
                        <MainForm />
                        <HomeGrid />
                    </ProtectedRoute>}>
                </Route>
                <Route path="/team" element={
                    <ProtectedRoute>
                        <Team />
                    </ProtectedRoute>}>
                </Route>
                <Route path="/team/:id" element={
                    <ProtectedRoute>
                        <div className="wrapper">
                            <HeroDetails />
                        </div>
                    </ProtectedRoute>}>
                </Route>
            </Routes>
        </main>
    )
}

export default Main