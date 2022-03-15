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
import ReminderApp from "./Pages/ReminderApp"

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/phonebookapp" component={ Phonebookapp } />
        <Route exact path="/statisticsapp" component={ StatisticsApp } />
        <Route exact path="/reminderapp" component={ ReminderApp } />
        <Buttons />
        <Route><Redirect to="/" /></Route>
      </Switch>
    </Router>
  );
}

export default App;