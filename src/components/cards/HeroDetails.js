import { useContext } from "react"
import { StoreContext } from "../store/storeProvider"
import { useParams } from "react-router"

const HeroDetails = () => {
    const [ store ] = useContext(StoreContext)
    const { id } = useParams()
    const heroDetails = store.team.find(hero => hero.id === id)

    if (!heroDetails)
    {
        return <p>El ID ingresado no se encuentra en el grupo.</p>
    }

    return (
        <div className="details-container l-60 m-80 s-100 center-block">
            <img src={heroDetails.image} alt="Imagen del héroe"></img>
            <div className="details">
                <p> <span className="details-title">Nombre:</span> {heroDetails.name}</p>
                <p> <span className="details-title">Alias:</span> {
                    heroDetails.aliases.map(alias => {
                        const aliasesLength = heroDetails.aliases.length
                        const aliasIndex = heroDetails.aliases.indexOf(alias)
                        if (aliasIndex < aliasesLength - 1)
                        {
                            return `${alias}, `
                        }
                        else
                        {
                            return alias
                        }
                    })
                }</p>
                <p> <span className="details-title">Peso:</span> {heroDetails.weight}</p>
                <p> <span className="details-title">Altura:</span> {heroDetails.height}</p>
                <p> <span className="details-title">Color de ojos:</span> <span className="upper-style">{heroDetails.eyeColor}</span> </p>
                <p> <span className="details-title">Color de pelo:</span> <span className="upper-style">{heroDetails.hairColor}</span></p>
                <p> <span className="details-title">Lugar de trabajo:</span> {heroDetails.baseWork}</p>
            </div>
        </div>
    )
}

export default HeroDetails