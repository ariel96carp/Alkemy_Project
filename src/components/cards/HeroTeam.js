import { useState, useRef, useEffect, useContext } from "react"
import { useNavigate } from "react-router"
import { StoreContext } from "../store/storeProvider"
import { types } from "../store/storeReducer"

const HeroTeam = ({ 
                    img, 
                    name,
                    id, 
                    intelligence, 
                    strength, 
                    speed, 
                    durability, 
                    power, 
                    combat }) => {
    const [ store, dispatch ] = useContext(StoreContext)
    const [ deleteHero, setDeleteHero ] = useState(false)
    const [ showDetails, setShowDetails ] = useState(false)
    const isMountedHero = useRef(false)
    const isMountedDetails = useRef(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        const excludeHero = (value) => {
            dispatch({
                type: types.removeHero,
                payload: value
            })
        }
        
        if (isMountedHero.current)
        {
            excludeHero(id)
        }
        else
        {
            isMountedHero.current = true
        }
    }, [ deleteHero, id, dispatch ])
    
    useEffect(() => {
        if (isMountedDetails.current)
        {
            navigate(`/team/${id}`)
        }
        else
        {
            isMountedDetails.current = true
        }
    }, [showDetails, navigate, id])

    return (
        <div className="hero">
            <div className="hero">
                <img src={img} alt="Imagen de superhéroe"></img>
                <div className="hero-team">
                    <h3 className="name center-content">{name}</h3>
                    <div className="powerstats">
                        <p>Inteligencia: {intelligence}</p>
                        <p>Fuerza: {strength}</p>
                        <p>Velocidad: {speed}</p>
                        <p>Durabilidad: {durability}</p>
                        <p>Poder: {power}</p>
                        <p>Combate: {combat}</p>
                    </div>
                    <div className="actions-buttons l-60 s-80 center-block">
                        <button className="error" onClick={() => setDeleteHero(true)}>Eliminar</button>
                        <button onClick={() => setShowDetails(true)}>Mostar detalles</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroTeam