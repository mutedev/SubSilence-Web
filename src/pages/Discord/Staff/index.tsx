import React, { Fragment } from 'react'
import Button from '../../../components/Button'
import rules from './rules'
import './style.scss'

export default () => {
  return (
    <Fragment>
      {rules.map((rule: string, index: number) => (
        <div className='Rule'>
          <div className='Rule-Index'>
            <code>[ {index + 1} ]</code>
          </div>
          <div className='Rule-Text'>{rule}</div>
        </div>
      ))}
      <Button center to='/discord'>
        Back
      </Button>
    </Fragment>
  )
}
