import HeroTeam from "../cards/HeroTeam"
import { useContext } from "react"
import { StoreContext } from "../store/storeProvider"

const Team = () => {
    const [ store ] = useContext(StoreContext)

    let 
        teamPower = 0,
        teamDurability = 0,
        teamIntelligence = 0,
        teamStrength = 0,
        teamSpeed = 0,
        teamCombat = 0,
        teamWeight = 0,
        teamHeight = 0
    
        if (store.team.length > 0)
        {
            const teamLength = store.team.length

            const substractNumbers = (string) => {
                let number = ""
                for (let i=0; i<string.length; i++) 
                {
                    if (!isNaN(string[i]))
                    {
                        number+=string[i]
                    }
                }

                return number
            }

            store.team.forEach(hero => {
                const powerstat = hero.powerstats
                if (!isNaN(powerstat.power))
                {
                    teamPower+=parseInt(powerstat.power)/teamLength
                }
                if (!isNaN(powerstat.combat))
                {
                    teamCombat+=parseInt(powerstat.combat)/teamLength
                }
                if (!isNaN(powerstat.durability))
                {
                    teamDurability+=parseInt(powerstat.durability)/teamLength
                }
                if (!isNaN(powerstat.speed))
                {
                    teamSpeed+=parseInt(powerstat.speed)/teamLength
                }
                if (!isNaN(powerstat.strength))
                {
                    teamStrength+=parseInt(powerstat.strength)/teamLength
                }
                if (!isNaN(powerstat.intelligence))
                {
                    teamIntelligence+=parseInt(powerstat.intelligence)/teamLength
                }
                teamWeight+=parseInt(substractNumbers(hero.weight))/teamLength
                teamHeight+=parseInt(substractNumbers(hero.height))/teamLength
            })
        }

    return (
        <section className="team-section wrapper">
            <h2 className="team-title center-content">Lista de Héroes</h2>
                    {
                        (store.team.length > 0)
                        ? (
                            <>
                                <div className="heroes-container">
                                    {
                                        store.team.map(hero => (
                                            <HeroTeam 
                                                key={hero.id}
                                                id={hero.id}
                                                img={hero.image}
                                                name={hero.name}
                                                intelligence={hero.powerstats.intelligence}
                                                strength={hero.powerstats.strength}
                                                speed={hero.powerstats.speed}
                                                durability={hero.powerstats.durability}
                                                power={hero.powerstats.power}
                                                combat={hero.powerstats.combat}
                                            />
                                            )
                                        )
                                    }
                                </div>
                                <div className="team-powerstats">
                                    <h2>Powerstats Promedio</h2>
                                    <p>Inteligencia: {teamIntelligence.toFixed(2)}</p>
                                    <p>Fuerza: {teamStrength.toFixed(2)}</p>
                                    <p>Velocidad: {teamSpeed.toFixed(2)}</p>
                                    <p>Durabilidad: {teamDurability.toFixed(2)}</p>
                                    <p>Poder: {teamPower.toFixed(2)}</p>
                                    <p>Combate: {teamCombat.toFixed(2)}</p>
                                    <h2>Físico Promedio</h2>
                                    <p>Peso: {`${teamWeight.toFixed(2)} kg`}</p>
                                    <p>Altura: {`${teamHeight.toFixed(2)} cm`}</p>
                                </div>
                            </>
                        )
                        : <p>No hay ningún héroe en tu equipo.</p>
                    }
        </section>
    )
}
export default Team