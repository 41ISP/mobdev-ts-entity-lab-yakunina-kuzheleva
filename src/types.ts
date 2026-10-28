export interface  IStrapiResponse<T> {
  data: T
  meta: Meta
}

export type Gender = "Mare" | "Stallion" |  "Gelding"
export type Spec = "ShowJumping" | "Dressage" | "Triathlon"
export type Breed = "RWP" | "OrlovTrotter" | "Trakehner" | "KWPN" | "Budyonovskaya" |
"Sangerschneider" | "TrojanPony" | "Crossbreed"


export interface Horse {
  id: number
  documentId: string
  name: string
  DOB: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  owner: string
  suit: string
  height: number
  training: boolean
  specialization: Spec
  breed: Breed
  gender: Gender
  fotochka: Fotochka[]
}

export interface Fotochka {
  id: number
  documentId: string
  name: string
  alternativeText: any
  caption: any
  focalPoint: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Formats {
  large?: ImageSize
  small: ImageSize
  medium: ImageSize
  thumbnail: Thumbnail
}

export interface ImageSize {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}


export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
