export {}

declare global {
  interface ArticleInfo {
    id?: number
    img: string
    name: string
    price: string
    region: string
    like: number
    chat: number
  }
  interface ArticleData {
    id: number
    member: string
    city: string
    street: string
    title: string
    categories: string
    price: number
    spec: string
    sold: boolean
    created: string
    fileid: number[]
    views: number
    thumbnailid?: number
  }
  interface Category {
    key: string
    value: string
  }
}
