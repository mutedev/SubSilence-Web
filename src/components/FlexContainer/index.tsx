import React, { useState, useEffect } from 'react'
import type Props from './interface'

import './style.scss'

export default (props: Props) => {
  const [height, setHeight] = useState('')

  const setDimensions = () => {
    const e = document.querySelector('.FlexContainer') as HTMLElement

    const h = e?.parentElement?.offsetHeight + 'px'

    setHeight(h)
  }

  useEffect(() => {
    setDimensions()

    window.addEventListener('resize', setDimensions)

    return () => {
      window.removeEventListener('resize', setDimensions)
    }
  })

  return (
    <div style={{ height }} className='FlexContainer'>
      {props.children}
    </div>
  )
}
