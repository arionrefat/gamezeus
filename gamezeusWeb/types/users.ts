export interface User {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  uuid: string
  avatar: string
  designation: string
}

export type UserType = User
