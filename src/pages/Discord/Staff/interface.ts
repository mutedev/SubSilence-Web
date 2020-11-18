export default interface Staff {
  roles: Role[]
  users: User[]
}

export interface Role {
  id: number
  name: string
  color: string
}

export interface User {
  roles: number[]
  discordName: string
  name: string
  quote: string
  img: string
  timezone: string
}