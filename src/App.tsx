import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Phonebookapp from "./Pages/Phonebookapp";

function App() {

  return (
    <Router>
      <Switch>

        <Route exact path="/" component={ Phonebookapp } />
        <Route><Redirect to="/" /></Route>

      </Switch>

    </Router>
  );
}

export default App;