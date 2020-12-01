import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.scss'

const root = document.getElementById('root') as HTMLElement
root.style.display = 'flex'

const nojs = document.getElementById('nojs') as HTMLElement
nojs.style.display = 'none'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
