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
  interface ArticleDetail {
    id: number
    img: string[]
    nickname: string
    rating: number
    name: string
    category: string
    upload_time: string
    price: string
    region: string
    like: number
    chat: number
    views: number
    user_profile: string
    desc: string
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
    create: string
  }
}
