import React, { Fragment, useEffect, useState } from 'react'
import Button from '../Button'
import CenterText from '../CenterText'
import type Props from './interface'

import './style.scss'

export default ({ command, url, preview }: Props) => {
  const id = `Command-${command.url}`

  useEffect(() => {
    const element = document.createElement('span')

    let name = command.name

    name = name.replaceAll('<', '[')
    name = name.replaceAll('>', ']')

    name = name.replaceAll('[', '<div class="Command">')
    name = name.replaceAll(']', '</div>')

    element.innerHTML = name

    document.getElementById(id)?.appendChild(element)
  }, [])

  return preview ? (
    <div className='Command-Card Preview'>
      <CenterText>
        <h2 className='title'>{command.url.replace('-', ' ')}</h2>
      </CenterText>
      <Button to={command.url} center>
        Learn More
      </Button>
    </div>
  ) : (
    <div className='Command-Card'>
      <CenterText>
        <h1 className='title'>
          <code>{command.url.replace('-', ' ')}</code>
        </h1>
      </CenterText>
      <CenterText>
        <h2 id={id} />
      </CenterText>
      {command.alias && (
        <CenterText>
          <h2>Alias: {command.alias}</h2>
        </CenterText>
      )}
      <CenterText>{command.desc}</CenterText>
      <Button to={url} center>
        Back
      </Button>
    </div>
  )
}
