import { Link } from "react-router-dom";

const TeamHeader = () => {
    return (
        <header>
            <div className="wrapper">
                <nav className="nav">
                    <ul className="menu">
                        <li className="item">
                            <Link to="/home" className="link">Buscar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default TeamHeader