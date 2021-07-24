export {}

declare global {
  interface ArticleData {
    buyerId: Nullable<number>
    id: number
    member: string
    city: string
    street: string
    title: string
    categories: string
    price: number
    spec: string
    sold: '판매중' | '예약중' | '판매완료'
    created: string
    fileid: number[]
    views: number
    like: boolean
    favCnt: number
  }
  interface ArticleCardData extends ArticleData {
    thumbnailid: number
  }
  interface Category {
    key: string
    value: string
  }
}
