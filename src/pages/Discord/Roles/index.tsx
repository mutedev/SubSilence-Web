import React, { Fragment } from 'react'
import CenterText from '../../../components/CenterText'
import Button from '../../../components/Button'
import type RoleCategory from './interface'
import type { Role } from './interface'
import roleCategory from './roles'
import './style.scss'

export default () => {
  return (
    <Fragment>
      {roleCategory.map((category: RoleCategory, index: number) => (
        <section className='Role-Section' key={index}>
          <CenterText>
            <h1>
              {category.title} <code>Roles</code>
            </h1>
            <h2>{category.description}</h2>
          </CenterText>
          <table className='Role-Table'>
            <tbody>
              {category.roles.map((role: Role, index: number) => (
                <tr className='Role' key={index}>
                  <td className='Name' style={{ color: role.color }}>
                    {role.name}
                  </td>
                  <td>{role.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
      <Button center to='/discord'>
        Back
      </Button>
    </Fragment>
  )
}
