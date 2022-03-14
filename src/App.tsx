import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Phonebookapp from "./Pages/Phonebookapp";
import StatisticsApp from "./Pages/StatisticsApp"
import Buttons from "./Components/Buttons";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/phonebookapp" component={ Phonebookapp } />
        <Route exact path="/statisticsapp" component={ StatisticsApp } />
        <Buttons />
        <Route><Redirect to="/" /></Route>
      </Switch>
    </Router>
  );
}

export default App;