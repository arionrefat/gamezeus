interface PhotoFormat {
  url: string
  name: string
  size: number
  width: number
  height: number
}

interface Photo {
  id: number
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    thumbnail: PhotoFormat
  }
  size: number
  url: string
}

export interface User {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  avatarlink: string | null
  fullname: string
  bio: string
  photo: Photo
  designation: string
  articles: any[]
}

export type UserType = User
