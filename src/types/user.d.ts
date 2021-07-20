export declare global {
  export type SignUpInfo = {
    name: string
    password: string
    city: string
    street1: string
    street2: string
    zipcode: string
    email: string
    birthdate: string
    contact: string
  }

  export type LoginUser = {
    email: string
    password: string
  }

  export type User = {
    id: number
    name: string
    city: string
    street1: string
    street2: string
    birthdate: string
    email: string
    contact: string
    ratingScore: number
  }
}
