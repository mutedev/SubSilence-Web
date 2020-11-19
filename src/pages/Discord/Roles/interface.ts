export default interface RoleCategory {
  title: JSX.Element | string
  description: string
  roles: Role[]
}

export interface Role {
  name: string
  color: string
  description: string
}
