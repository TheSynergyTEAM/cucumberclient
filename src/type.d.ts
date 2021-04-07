declare namespace article {
  export interface ArticleInfo {
    img: string
    name: string
    price: string
    region: string
    like: number
    chat: number
  }
}

// null과 undefined를 가질 수 있는 타입 정의
declare type Nullable<T> = T | null | undefined
