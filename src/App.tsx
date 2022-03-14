import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Phonebookapp from "./Pages/Phonebookapp";
import Buttons from "./Components/Buttons";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/phonebookapp" component={ Phonebookapp } />
        <Buttons />
        <Route><Redirect to="/" /></Route>
      </Switch>
    </Router>
  );
}

export default App;