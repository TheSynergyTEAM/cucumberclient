import React, { useState } from 'react'
import RouterWrapper from 'pages'
import GlobalStyle from 'styles'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'
import UserContext from 'context/user'

const App: React.FC = () => {
  const [user, setUser] = useState<Nullable<User>>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const mutateUser = (user: User) => {
    setUser(user)
    setIsLoggedIn(true)
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, isLoggedIn, setUser: mutateUser }}>
        <ThemeProvider theme={theme}>
          <RouterWrapper />
        </ThemeProvider>
      </UserContext.Provider>
    </>
  )
}

export default App
