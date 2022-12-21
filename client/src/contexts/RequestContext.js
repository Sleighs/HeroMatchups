import React, {useState} from "react"

const RequestContext = React.createContext()

function RequestContextProvider(props){ 
    const [heroData, setHeroData] = useState(null)
    const [currentHero, setCurrentHero] = useState(null)
    const [currentRandomHero, setCurrentRandomHero] = useState(null)

    const [tanks, setTanks] = useState([])
    const [damage, setDamage] = useState([])
    const [supports, setSupports] = useState([])

    //const apiUrl = 'https://hero-matchups-api.herokuapp.com'
    const apiUrl = 'https://hero-matchups-api.netlify.app/.netlify/functions/api'

    async function getData() {
        const res = await fetch(apiUrl)
        const data = await res.json()

        //console.log(data)

        res.send(data)
    }

    async function getAllHeroes() {
        const res = await fetch(apiUrl + '/heroes')
        const data = await res.json()

        setHeroData(data)
        saveAllHeroes(data)
    }

    function saveAllHeroes(data) {
        data.forEach(item => {
            if (item.type === 'tank'){
                setTanks(prev => ([
                    ...prev,
                    item
                ]))
            }
            if (item.type === 'damage'){
                setDamage(prev => ([
                    ...prev,
                    item
                ]))
            }
            if (item.type === 'support'){
                setSupports(prev => ([
                    ...prev,
                    item
                ]))
            }
        })
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
            apiUrl,
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
            getRandomHeroByType,
            tanks,
            damage,
            supports
        }}>
            {props.children}
        </RequestContext.Provider>
    )
}

export { RequestContext, RequestContextProvider }