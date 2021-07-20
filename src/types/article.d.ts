export {}

declare global {
  interface ArticleData {
    itemid: number
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
  }
  interface ArticleCardData extends ArticleData {
    thumbnailid: number
  }
  interface Category {
    key: string
    value: string
  }
}
