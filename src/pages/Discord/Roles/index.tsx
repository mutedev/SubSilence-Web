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
        <section className="Role-Section" key={index}>
          <CenterText>
            <h1>{category.title}</h1>
            <h2>{category.description}</h2>
          </CenterText>
          {category.roles.map((role: Role, index: number) => (
            <div className='Role' key={index}>
              <div className='Role-Index'>{role.name}</div>
              <div className='Role-Text'>{role.description}</div>
            </div>
          ))}
        </section>
      ))}
      <Button center to='/discord'>
        Back
      </Button>
    </Fragment>
  )
}
