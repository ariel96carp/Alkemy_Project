const types = {
    searchHero: "search - hero",
    addHero: "add - hero",
    removeHero: "remove - hero",
    resetState: "reset - state"
}

const initialState = {
    superhero: {
        name: "batman"
    },
    team: []
}

const storeReducer = (state, action) => {
    switch(action.type)
    {
        case types.searchHero:
            return {
                ...state,
                superhero: {
                    name: action.payload
                }
            }
        case types.addHero:
            return {
                ...state,
                team: [
                    ...state.team,
                    action.payload
                ]
            }
        case types.removeHero:
            return {
                ...state,
                team: state.team.filter(hero => hero.id !== action.payload)
            }
        case types.resetState:
            return initialState
        default:
            return state
    }
}

export default storeReducer
export { initialState, types }