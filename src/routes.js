import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Home from "./pages/Home/"
import Purchase from "./components/Purchase"
import Questions from "./pages/Questions"
import React from "react"
import Results from "./pages/Results"
import config from "./services/config"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/results"
          render={props => <Results {...props} data={config.results} />}
        />
        <Route
          path="/questions"
          render={props => <Questions {...props} data={config} />}
        />
        <Route path="/purchase" component={Purchase} />
      </Switch>
    </Router>
  )
}
