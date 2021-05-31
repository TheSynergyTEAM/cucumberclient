export {}

declare global {
  export type ReviewData = {
    itemid: number
    memberid: number
    ratingscore: number
    content: string
    fileid: number[]
  }
}
