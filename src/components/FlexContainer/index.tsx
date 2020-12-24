import React, { useState, useEffect } from 'react'
import type Props from './interface'

import './style.scss'

export default (props: Props) => {
  const [height, setHeight] = useState('')

  const setDimensions = () => {
    setTimeout(() => {
      const e = document.querySelector('.FlexContainer') as HTMLElement

      const h = e?.parentElement?.offsetHeight + 'px'

      setHeight(h)
    }, 1000)
  }

  useEffect(() => {
    setDimensions()

    document.body.addEventListener('resize', setDimensions)

    return () => {
      document.body.removeEventListener('resize', setDimensions)
    }
  })

  return (
    <div style={{ height }} className='FlexContainer'>
      {props.children}
    </div>
  )
}
