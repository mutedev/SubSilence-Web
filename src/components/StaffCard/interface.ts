import type { Role, User } from '../../pages/Discord/Staff/interface'

export default interface Props {
  staffMember: User
  role: Role
  width: number
}
