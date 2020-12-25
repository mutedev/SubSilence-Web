import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Layout from '../components/Layout'

import fulls from './full'
import shorts from './short'

export default () => (
  <Router>
    <Switch>
      {shorts.routes.map((short, index) => (
        <Route
          key={index}
          exact
          path={shorts.prefix + short.from}
          render={() => <Redirect to={short.to} />}
        />
      ))}
      {fulls.map((full, index) => (
        <Route
          key={index}
          exact
          path={full.path}
          render={() => <Layout route={full} />}
        />
      ))}
    </Switch>
  </Router>
)
