import { useState, useEffect, useRef, useContext } from "react"
import { StoreContext } from "../store/storeProvider"
import { types } from "../store/storeReducer"

const Superhero = ({ id, name, img }) => {
    const [ store, dispatch ] = useContext(StoreContext)
    const [ addHero, setAddHero ] = useState(false)
    const isMounted = useRef(false)
    
    useEffect(() => {
        const addHeroToTeam = (values) => {
            dispatch({
                type: types.addHero,
                payload: {
                    id: values.id,
                    name: values.name,
                    image: values.image.url,
                    weight: values.appearance.weight[1],
                    height: values.appearance.height[1],
                    eyeColor: values.appearance["eye-color"],
                    hairColor: values.appearance["hair-color"],
                    baseWork: values.work.base,
                    aliases: values.biography.aliases,
                    powerstats: values.powerstats
                }
            })
        }

        const getData = async (id) => {
            try{
                const response = await fetch(`${process.env.REACT_APP_URL_API}${id}`)
                switch(response.status)
                {
                    case 200: 
                        const dataResponse = await response.json()
                        addHeroToTeam(dataResponse)
                        break
                    default:
                        console.log(`Codigo de respuesta INCORRECTO: ${response.status}.`)
                    }
                }
                catch(e){
                    console.log("Ocurrió un error durante el llamado a la API.")                    
                }
        }

        if (isMounted.current)
        {
            getData(id)
        }
        else
        {
            isMounted.current = true
        }
    }, [ addHero, id, dispatch ])

    const validateHero = () => {
        const repeatedHero = store.team.find(hero => hero.id === id)
        if (store.team.length < 6 && !repeatedHero)
        {
            setAddHero(true)
        }
    }

    return (
        <div className="card">
            <img src={img} alt="Imagen de superhéroe"></img>
            <div className="hero-description">
                <h2 className="hero-name center-content">{name}</h2>
                <div className="buttons-container l-80 m-60 s-80 center-block">
                    {!addHero && 
                        <button className="success" onClick={validateHero}>Agregar</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Superhero