import { Routes, Route } from "react-router-dom"
import HomeHeader from "../pages/homeHeader"
import TeamHeader from "../pages/teamHeader"
import DetailsHeader from "../pages/detailsHeader"

const MainHeader = () => {

    return (
        <Routes>
            <Route path="/" element={<header></header>}></Route>
            <Route path="/home" element={<HomeHeader />}></Route>
            <Route path="/team" element={<TeamHeader />}></Route>
            <Route path="/team/:id" element={<DetailsHeader />}></Route>
        </Routes>
    )
}

export default MainHeader