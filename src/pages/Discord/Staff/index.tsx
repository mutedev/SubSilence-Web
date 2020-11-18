import React, { Fragment } from 'react'
import Button from '../../../components/Button'
import StaffCard from '../../../components/StaffCard'
import CenterText from '../../../components/CenterText'
import type { Role, User } from './interface'
import staff from './staff'
import './style.scss'

export default () => {
  return (
    <Fragment>
      {staff.roles.map((role: Role) => (
        <section key={role.id}>
          <CenterText>
            <h1 style={{ color: role.color }}>{role.name}s</h1>
          </CenterText>
          <div className='Card-Parent'>
            {staff.users.map((user: User, index: number) =>
              user.roles.map(
                (roleIndex) =>
                  role.id === roleIndex && (
                    <StaffCard
                      staffMember={user}
                      key={index}
                      role={role}
                      width={300}
                    />
                  )
              )
            )}
          </div>
        </section>
      ))}
      <Button center to='/discord'>
        Back
      </Button>
    </Fragment>
  )
}
