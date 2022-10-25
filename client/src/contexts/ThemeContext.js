import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){ 
    const [theme, setTheme] = useState('dark-theme')

    return(
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }