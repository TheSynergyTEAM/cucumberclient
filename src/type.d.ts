declare namespace Article {
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
}

// null과 undefined를 가질 수 있는 타입 정의
declare type Nullable<T> = T | null | undefined

// 유저 타입
declare type User = {
  name: string
  city: string
  street1: string
  birthDate: string
  email: string
  contact: string
  ratingScore: number
}
