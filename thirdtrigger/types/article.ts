import { User } from "./users"

interface PhotoFormat {
  url: string
  name: string
  path: string | null
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
    large?: PhotoFormat
    small?: PhotoFormat
    medium?: PhotoFormat
    thumbnail?: PhotoFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  createdAt: string
  updatedAt: string
}

export interface Article {
  id: number
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  articlename: string
  description: string
  author: {
    data: User
  }
  thumbnail: {
    data: Photo
  }
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface RootObject {
  data: Article[]
  meta: {
    pagination: Pagination
  }
}

export type UserType = RootObject
