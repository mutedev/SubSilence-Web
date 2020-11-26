import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Layout from '../components/Layout'
import type { Routes, ShortRoutes } from './interface'

import normalRoutes from './main/normal'
import shortRoutes from './main/short'

export default () => (
  <Router>
    <Switch>
      {shortRoutes.routes.map((shortRoute: ShortRoutes, index: number) => (
        <Route
          key={index}
          exact
          path={shortRoutes.prefix + shortRoute.from}
          render={() => <Redirect to={shortRoute.to} />}
        />
      ))}
      {normalRoutes.map((normalRoute: Routes, index: number) => (
        <Route
          key={index}
          exact
          path={normalRoute.path}
          render={() => <Layout route={normalRoute} />}
        />
      ))}
    </Switch>
  </Router>
)
