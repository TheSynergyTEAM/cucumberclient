export {}

declare global {
  export type SignUpInfo = {
    name: string
    password: string
    city: string
    street1: string
    street2: string
    zipcode: string
    email: string
    birthDate: string
    contact: string
  }

  export type SignInInfo = {
    id: string
    password: string
  }
}
