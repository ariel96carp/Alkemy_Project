import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef, useContext } from "react"
import { StoreContext } from "../store/storeProvider"
import { types } from "../store/storeReducer"

const HomeHeader = () => {
    const [ userLogOut, setUserLogOut ] = useState(false)
    const isMounted = useRef(false)
    const [ store, dispatch ] = useContext(StoreContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        const resetStore = () => {
            dispatch({
                type: types.resetState
            })
        }

        if (isMounted.current)
        {
            if (userLogOut)
            {
                localStorage.removeItem("alkemyToken")
                resetStore()
                navigate("/", { replace: true })
            }
        }
        else
        {
            isMounted.current = true
        }
    }, [ userLogOut, dispatch, navigate ])

    return (
        <header>
            <div className="wrapper">
                <nav className="nav">
                    <ul className="menu">
                        <li className="item">
                            <Link to="/team" className="link">Mi Equipo</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={() => setUserLogOut(true)}>Cerrar sesión</button>
            </div>
        </header>
    )
}

export default HomeHeader