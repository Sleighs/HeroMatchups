import React, {useState} from "react"

const RequestContext = React.createContext()

function RequestContextProvider(props){ 
    const [heroData, setHeroData] = useState(null)
    const [currentHero, setCurrentHero] = useState(null)
    const [currentRandomHero, setCurrentRandomHero] = useState(null)

    const apiUrl = 'https://hero-matchups-api.herokuapp.com'

    async function getData() {
        const res = await fetch(apiUrl)
        const data = await res.json()

        //console.log(data)

        res.send(data)
    }

    async function getAllHeroes() {
        const res = await fetch(apiUrl + '/heroes')
        const data = await res.json()

        //console.log(data)

        setHeroData(data)
    }

    async function getSingleHero(heroName) {
        const res = await fetch(apiUrl + '/heroes/' + heroName)
        const data = await res.json()

        //console.log(data[0])

        setCurrentHero(data[0])
    }

    async function getRandomHero() {
        const res = await fetch(apiUrl + '/random/')
        const data = await res.json()

        //console.log(data)

        setCurrentRandomHero(data)
    }

    async function getRandomHeroByType(type) {
        const res = await fetch(apiUrl + '/random/' + type)
        const data = await res.json()

        //console.log(data)

        setCurrentRandomHero(data)
    }

    return(
        <RequestContext.Provider value={{
            heroData,
            setHeroData,
            currentHero,
            setCurrentHero,
            currentRandomHero,
            setCurrentRandomHero,
            getData,
            getAllHeroes,
            getSingleHero,
            getRandomHero,
            getRandomHeroByType
        }}>
            {props.children}
        </RequestContext.Provider>
    )
}

export { RequestContext, RequestContextProvider }