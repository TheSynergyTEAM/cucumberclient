export {}

declare global {
  export type ParentAddress = {
    id: number
    name: string
  }

  export type ChildAddress = {
    city: string
    streetList: string[]
  }
}
