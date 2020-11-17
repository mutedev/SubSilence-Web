import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import routes from './Routes'
import type Routes from './Routes/interface'

export default () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: Routes, index: number) => (
          <Route
            key={index}
            exact
            path={route.path}
            render={() => <Layout route={route} />}
          />
        ))}
      </Switch>
    </Router>
  )
}
