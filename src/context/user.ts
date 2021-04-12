import { createContext } from 'react'

interface UserContext {
  user: Nullable<User>
  isLoggedIn: boolean
  setUser: (user: User) => void
}

const userContext = createContext<UserContext>({
  user: null,
  isLoggedIn: false,
  setUser: () => {}
})

export default userContext
