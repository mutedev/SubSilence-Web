import React, { Fragment } from 'react'
import Button from '../../../components/Button'
import rules from './rules'
import './style.scss'

export default () => {
  return (
    <Fragment>
      <table>
        <tbody>
          {rules.map((rule: string, index: number) => (
            <tr className='Rule' key={index}>
              <td className='Index'>
                <code>[ {index + 1} ]</code>
              </td>
              <td>{rule}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button center to='/discord'>
        Back
      </Button>
    </Fragment>
  )
}
