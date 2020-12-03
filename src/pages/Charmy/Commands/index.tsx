import React, { Fragment, useEffect, useState } from 'react'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import CommandCard from '../../../components/CommandCard'
import Button from '../../../components/Button'
import CenterText from '../../../components/CenterText'

import commands from './commands'

import './style.scss'

interface Params {
  url: string
}

export default () => {
  const history = useHistory()
  const params: Params = useParams()

  const url = params.url
  const [page, setPage] = useState('')

  useEffect(() => {
    if (!url) {
      if (page !== 'all') {
        setPage('all')
      }
    } else {
      commands.map((category) => {
        if (url === category.url) {
          if (page !== 'category') {
            setPage('category')
          }
        } else {
          category.commands.map((command) => {
            if (url === command.url) {
              if (page !== 'command') {
                setPage('command')
              }
            }
          })
        }
      })
    }
  }, [])

  interface CommandRoute {
    path: string
    component: JSX.Element
  }

  const routes: CommandRoute[] = []
  const path = '/charmy/commands'

  routes.push({
    path: '',
    component: (
      <Fragment>
        {commands.map((category, i) => (
          <div key={i} className='Charmy-Command'>
            <CenterText>
              <h1>{category.name}</h1>
            </CenterText>
            <CenterText>
              <h2>{category.desc}</h2>
            </CenterText>
            <Button center to={`${path}/${category.url}`}>
              View All {category.name}
            </Button>
          </div>
        ))}
        <Button center to='/charmy'>
          Back
        </Button>
      </Fragment>
    )
  })

  commands.map((category, i) => {
    routes.push({
      path: category.url,
      component: (
        <Fragment key={i}>
          <CenterText>
            <h1>{category.name}</h1>
          </CenterText>
          <CenterText>
            <h2>{category.desc}</h2>
          </CenterText>
          <section>
            {category.commands.map((command, j) => (
              <CommandCard key={j} preview command={command} />
            ))}
          </section>
          <Button center to={path}>
            Back
          </Button>
        </Fragment>
      )
    })

    category.commands.map((command, i) => {
      routes.push({
        path: command.url,
        component: <CommandCard key={i} url={category.url} command={command} />
      })
    })
  })

  return (
    <Switch>
      {routes.map((item, i) => (
        <Route
          exact
          key={i}
          path={`${path}/${item.path}`}
          render={() => item.component}
        />
      ))}
    </Switch>
  )
}
