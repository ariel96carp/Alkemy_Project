import useFetch from "../hooks/useFetch"
import Superhero from "../cards/Superhero"
import { useContext } from "react"
import { StoreContext } from "../store/storeProvider"

const HomeGrid = () => {
    const [ store ] = useContext(StoreContext)
    const [ data, error ] = useFetch(`search/${store.superhero.name}`)

    if(error)
    {
        return <p className="api-error wrapper">¡Ups! Ha ocurrido un error...</p>
    }

    if(!data || !data.results)
    {
        return <p className="api-error wrapper">No se encontró ningún resultado.</p>
    }

    return (
        <section className="wrapper">
            <div className="grid-container">
                {
                    data ? 
                    (
                        data.results.map(card => (
                            <Superhero 
                                key={card.id}
                                id={card.id}
                                name={card.name}
                                img={card.image.url}
                            />
                        ))
                    )
                    : <p className="loader">Cargando...</p>
                }
            </div>
        </section>
    )
}

export default HomeGrid