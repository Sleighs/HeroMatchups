import "./App.css";
import { Home } from "./pages";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Homepage = () => {
	return (
      <div className="app">
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