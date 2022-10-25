import "./App.css";
import { Home } from "./pages";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

const Homepage = () => {
  const { theme } = useContext(ThemeContext)
	return (
      <div className={`app ${theme}`} >
        <Home />
      </div>
	)
};

export default function App (){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={ Homepage }/>
      </Switch>
    </Router>
  )
}

export { Homepage } ;