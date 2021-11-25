import { useState, useEffect } from "react"

const useFetch = (endpoint) => {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_URL_API}${endpoint}`)
            try{
                switch(response.status)
                {
                    case 200:
                        const dataResponse = await response.json()
                        setData(dataResponse)
                        break
                    default:
                        setError(true)
                }
            }
            catch(e){
                setError(true)
            }
        }
        fetchData()
    }, [ endpoint ])

    return [ data, error ]
}

export default useFetch