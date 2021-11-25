import { Link } from "react-router-dom"

const DetailsHeader = () => {
    return (
        <header>
            <div className="wrapper">
                <nav className="nav">
                    <ul className="menu">
                        <li className="item">
                            <Link to="/team" className="link">Mi equipo</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default DetailsHeader